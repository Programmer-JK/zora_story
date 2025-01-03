>작성일 : 2024.10.18

웹 서버를 구동하다보면 특정 port가 죽지않고 살아 아래와 같은 오류를 나타낼 때가 있다. 
 >Address localhost:3000 is already in use.

```
# 원하는 포트 조회
$ netstat -ano | findstr :3000

# 해당 포트 죽이기
$ taskkill /f /pid '원하는 pid 번호'

```