# MySQL 복제 설정 종합 가이드

## 1. Master 서버 설정
### 1.1 MySQL 설정 파일 수정
```bash
# MySQL 설정 파일 수정
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf

# 다음 내용 추가/수정
bind-address = 0.0.0.0
server-id = 1
log_bin = /var/log/mysql/mysql-bin.log
```

## 2. Slave 서버 설정
### 2.1 MySQL 설정 파일 수정
```bash
# MySQL 설정 파일 수정
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf

# 다음 내용 추가/수정
server-id = 2
log_bin = /var/log/mysql/mysql-bin.log
```

## 3. 복제 구성
### 3.1 복제 사용자 생성 및 권한 설정 (Master에서)
```sql
CREATE USER 'repl_user'@'%' IDENTIFIED BY '비밀번호';
GRANT REPLICATION SLAVE ON *.* TO 'repl_user'@'%';
FLUSH PRIVILEGES;
```

### 3.2 데이터 동기화
```bash
# Master에서 덤프 생성
mysqldump -u root -p --all-databases --master-data > dbdump.sql

# Slave로 덤프 파일 전송
scp dbdump.sql slave서버:/tmp/

# Slave에서 덤프 복원
mysql -u root -p < /tmp/dbdump.sql
```

### 3.3 Slave 복제 설정
```sql
-- Master 상태 확인
SHOW MASTER STATUS;

-- Slave에서 복제 설정
CHANGE MASTER TO
    MASTER_HOST='마스터IP',
    MASTER_USER='repl_user',
    MASTER_PASSWORD='비밀번호',
    MASTER_LOG_FILE='mysql-bin.000001',
    MASTER_LOG_POS=변수값;
START SLAVE;
```

## 4. 복제 상태 모니터링 및 문제 해결
### 4.1 상태 확인 명령어
```sql
-- 복제 상태 확인
SHOW SLAVE STATUS\G

-- Master 상태 확인
SHOW MASTER STATUS;

-- Binary 로그 확인
SHOW BINARY LOGS;
```

### 4.2 주요 확인 사항
- Slave_IO_Running: Yes인지 확인
- Slave_SQL_Running: Yes인지 확인
- Last_Error: 에러 메시지 확인
- Seconds_Behind_Master: 지연 시간 확인 (0이면 동기화 완료)

### 4.3 복제 동작 테스트
```sql
-- Master에서 테스트
CREATE DATABASE test_sync;
USE test_sync;

CREATE TABLE sample (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO sample (message) VALUES ('테스트 메시지 1');

-- Slave에서 확인
USE test_sync;
SELECT * FROM sample;
```

### 4.4 문제 해결
#### Error 13117 (바이너리 로그 관련)
```sql
-- Binary 로그 설정 확인
SHOW VARIABLES LIKE 'expire_logs_days';

-- 로그 보관 기간 설정
SET GLOBAL expire_logs_days = 7;

-- 영구 설정 (my.cnf)
expire_logs_days = 7      # MySQL 5.7 이하
binlog_expire_logs_seconds = 604800  # MySQL 8.0 이상
```

#### Server-id 충돌
```sql
-- server-id 확인
SHOW VARIABLES LIKE 'server_id';

-- 설정 파일에서 수정
server-id = 2  # Slave의 경우
```

### 4.5 오류 로그 확인
```bash
# 에러 로그 확인
tail -f /var/log/mysql/error.log

# 네트워크 연결 확인
telnet 마스터서버IP 3306
```

### 4.6 복제 재시작 절차
```sql
STOP SLAVE;
RESET SLAVE;
CHANGE MASTER TO [설정값];
START SLAVE;
```

## 5. Binary 로그 관리
### 5.1 로그 유효기간 확인 및 설정
```sql
-- 현재 설정 확인
SHOW VARIABLES LIKE 'expire_logs_days';
SHOW VARIABLES LIKE 'binlog_expire_logs_seconds';

-- 임시 설정 변경 (재시작 시 초기화)
SET GLOBAL expire_logs_days = 7;  -- MySQL 5.7 이하
SET GLOBAL binlog_expire_logs_seconds = 604800;  -- MySQL 8.0 이상 (7일)
```

### 5.2 영구 설정 변경
```bash
# MySQL 설정 파일 수정
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf

# MySQL 5.7 이하 버전
expire_logs_days = 7  # 7일간 보관

# MySQL 8.0 이상 버전
binlog_expire_logs_seconds = 604800  # 7일 (7 * 24 * 60 * 60초)
```

### 5.3 로그 파일 관리
```sql
-- 현재 binary 로그 파일 목록 확인
SHOW BINARY LOGS;

-- 특정 날짜 이전 로그 수동 삭제
PURGE BINARY LOGS BEFORE DATE_SUB(NOW(), INTERVAL 7 DAY);
PURGE BINARY LOGS BEFORE '2024-12-10 00:00:00';
```

### 5.4 권장 설정
1. 운영 환경별 권장 보관 기간
   - 운영 서버: 3-7일
   - 개발 서버: 1-3일
   - 백업 서버: 7-14일 (필요에 따라 조정)

2. 고려사항
   - 디스크 공간 여유
   - 복제 지연 가능성
   - 백업 주기
   - 장애 복구 시간

### 5.5 주의사항
1. 너무 짧은 보관 기간 설정 시 문제점
   - Slave 동기화 실패 가능성
   - 장애 복구 어려움
   - Point-in-time 복구 제한

2. 너무 긴 보관 기간 설정 시 문제점
   - 디스크 공간 부족
   - 관리 복잡도 증가
   - 백업/복구 시간 증가

3. 설정 변경 후 확인사항
   - 복제 정상 작동 확인
   - 디스크 사용량 모니터링
   - 로그 순환 정상 작동 확인

## 6. 중요 참고사항
1. Master와 Slave의 MySQL 버전은 가능한 동일하게 유지
2. 네트워크 방화벽 설정 확인 (기본 포트: 3306)
3. Binary 로그 공간 관리를 위한 주기적인 모니터링 필요
4. 복제 지연 발생 시 즉시 원인 파악 및 조치 필요
5. 큰 데이터베이스의 경우 덤프 및 복사 과정에서 시간이 오래 걸릴 수 있음

## 7. 모범 사례
1. 정기적인 복제 상태 모니터링 실시
2. 주기적인 백업 수행
3. 장애 복구 절차 문서화
4. 복제 구성 변경 시 충분한 테스트 수행
5. Binary 로그 보관 기간 적절히 설정
   - 운영 서버: 3-7일
   - 개발 서버: 1-3일
   - 디스크 공간 고려하여 설정