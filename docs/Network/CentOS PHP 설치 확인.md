>작성일 : 2024.12.05

CentOS에서 PHP 설치/확인하는 방법을 정리해드리겠습니다:

1. **PHP 설치**
```bash
# PHP 기본 설치
sudo yum install php

# 주요 PHP 모듈 설치
sudo yum install php-cli php-fpm php-mysqlnd php-xml php-mbstring php-gd

# Apache 재시작
sudo systemctl restart httpd
```

2. **PHP 설치 확인 방법**
```bash
# 버전 확인
php -v

# 설치된 모듈 확인
php -m

# PHP-Apache 모듈 확인
httpd -M | grep php
```

3. **웹에서 PHP 작동 확인**
```bash
# PHP 정보 페이지 생성
echo "<?php phpinfo(); ?>" | sudo tee /var/www/html/info.php

# 테스트 페이지 생성
echo "<?php echo 'PHP가 정상적으로 작동합니다.'; ?>" | sudo tee /var/www/html/test.php
```

4. **확인 방법**
- 웹 브라우저에서 아래 주소로 접속
  - `http://서버IP/info.php`
  - `http://서버IP/test.php`

문제가 있다면 Apache를 재시작하거나 로그를 확인합니다:
```bash
sudo systemctl restart httpd
sudo tail -f /var/log/httpd/error_log
```