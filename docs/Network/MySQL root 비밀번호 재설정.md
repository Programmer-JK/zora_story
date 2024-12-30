>작성일 : 2024.11.06

MySQL root 계정 비밀번호 재설정 방법을 정리해드리겠습니다:

1. **MySQL 상태 확인**
```bash
# MySQL 서비스 상태 확인
sudo service mysqld status

# MySQL 버전 확인
mysql --version
```

2. **비밀번호 재설정 과정**
```bash
# 1. MySQL 서비스 중지
sudo service mysqld stop

# 2. 안전 모드로 MySQL 시작
sudo mysqld_safe --skip-grant-tables &

# 3. MySQL 접속 (비밀번호 없이)
mysql -u root
```

3. **MySQL 명령어로 비밀번호 변경**
```sql
-- MySQL 5.x 버전의 경우
USE mysql;
UPDATE user SET password=PASSWORD('새로운비밀번호') WHERE User='root';
FLUSH PRIVILEGES;
EXIT;

-- MySQL 8.x 버전의 경우
USE mysql;
ALTER USER 'root'@'localhost' IDENTIFIED BY '새로운비밀번호';
FLUSH PRIVILEGES;
EXIT;
```

4. **변경 후 작업**
```bash
# MySQL 재시작
sudo service mysqld restart

# 새 비밀번호로 접속 테스트
mysql -u root -p
```

주의사항:
- 비밀번호는 복잡하게 설정할 것
- 버전에 따라 비밀번호 변경 명령어가 다름
- 작업 후 반드시 MySQL 재시작 필요