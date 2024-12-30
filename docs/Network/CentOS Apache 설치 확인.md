>작성일 : 2024.12.05

CentOS에서 웹 서버(Apache) 설정 관련 내용을 정리해드리겠습니다:

1. **Apache 설치 확인 방법**

```bash
# 서비스 상태 확인
sudo systemctl status httpd

# 프로세스 확인
ps -ef | grep httpd

# 버전 확인
httpd -v
```

2. **방화벽 설정**

```bash
# 방화벽 상태 확인
sudo firewall-cmd --list-all

# 80포트 추가 (웹 서버용)
sudo firewall-cmd --permanent --add-port=80/tcp

# 방화벽 설정 다시 로드
sudo firewall-cmd --reload
```

3. **작동 확인**

- 웹 브라우저에서 확인: `http://서버IP주소`
- 포트 확인: `sudo netstat -tulpn | grep :80`

주의사항:

- 기본적으로 방화벽에는 SSH용 22번 포트만 열려있음
- 웹 서버 사용을 위해서는 반드시 80포트를 열어줘야 함
- 방화벽 설정 변경 후에는 반드시 reload 필요
