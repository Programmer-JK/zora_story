## 1. Git 초기 설정

### 기본 설정
```bash
# 사용자 정보 설정
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 기본 브랜치명 설정
git config --global init.defaultBranch main

# 줄바꿈 설정
git config --global core.autocrlf true  # Windows
git config --global core.autocrlf input # Mac/Linux

# 자주 쓰는 명령어 단축키 설정
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

### 저장소 생성
```bash
# 새 저장소 생성
git init

# 원격 저장소 복제
git clone <repository-url>

# 기존 프로젝트와 원격 저장소 연결
cd existing-project
git init
git remote add origin <repository-url>
git add .
git commit -m "Initial commit"
git push -u origin main
```

## 2. 파일 관리

### 기본 명령어
```bash
# 파일 상태 확인
git status
git status -s  # 간단히 보기

# 파일 추적
git add <파일명>
git add .      # 모든 변경사항
git add *.js   # 특정 확장자만

# 파일 커밋
git commit -m "커밋 메시지"
git commit -am "커밋 메시지"  # add + commit

# 파일 삭제
git rm <파일명>
git rm --cached <파일명>  # 원격 저장소에서만 삭제
```

### 변경사항 관리
```bash
# 변경사항 확인
git diff
git diff --staged  # 스테이징된 변경사항
git diff <브랜치1> <브랜치2>

# 파일 이력 조회
git log -p <파일명>
git blame <파일명>
git show <커밋해시>
```

## 3. 브랜치 관리

### 기본 작업
```bash
# 브랜치 목록
git branch          # 로컬
git branch -r       # 원격
git branch -a       # 모두

# 브랜치 생성
git branch <브랜치명>
git checkout -b <브랜치명>
git switch -c <브랜치명>  # 최신 문법

# 브랜치 전환
git checkout <브랜치명>
git switch <브랜치명>

# 브랜치 삭제
git branch -d <브랜치명>
git branch -D <브랜치명>  # 강제 삭제
```

### 병합 작업
```bash
# 브랜치 병합
git merge <브랜치명>
git merge --no-ff <브랜치명>  # fast-forward 하지 않음

# 충돌 해결
git merge --abort  # 병합 취소
git reset --hard HEAD  # 병합 전으로 되돌리기

# 특정 커밋만 가져오기
git cherry-pick <커밋해시>
```

## 4. 원격 저장소 관리

### 기본 작업
```bash
# 원격 저장소 확인
git remote -v

# 원격 저장소 추가/수정/삭제
git remote add origin <URL>
git remote set-url origin <URL>
git remote remove origin

# 원격 저장소와 동기화
git fetch origin
git pull origin <브랜치명>
git push origin <브랜치명>
```

### 고급 작업
```bash
# 강제 푸시 (주의!)
git push -f origin <브랜치명>

# 태그 관리
git tag <태그명>
git tag -a <태그명> -m "메시지"
git push origin <태그명>

# 원격 브랜치 삭제
git push origin --delete <브랜치명>
```

## 5. 작업 내용 임시 저장 (Stash)

```bash
# 작업 임시 저장
git stash save "메시지"
git stash push -m "메시지"

# stash 목록 확인
git stash list

# stash 적용
git stash pop       # 적용 후 삭제
git stash apply     # 적용만
git stash drop      # 삭제만

# 특정 stash 적용
git stash apply stash@{n}
```

## 6. 히스토리 관리

### 로그 확인
```bash
# 커밋 이력 조회
git log
git log --oneline  # 한 줄로
git log --graph    # 그래프로
git log --author="사용자명"
git log --since="1 week ago"
```

### 되돌리기
```bash
# 마지막 커밋 수정
git commit --amend

# 특정 커밋으로 되돌리기
git reset --soft <커밋해시>   # 변경사항 보존
git reset --hard <커밋해시>   # 변경사항 삭제

# 특정 커밋 취소
git revert <커밋해시>
```

## 7. 문제 해결

```bash
# 충돌 파일 확인
git status
git diff --name-only --diff-filter=U

# 저장소 최적화
git gc
git prune

# 손상된 저장소 복구
git fsck

# 파일 복구
git checkout <커밋해시> -- <파일명>
```

## 8. .gitignore 설정

```bash
# 기본적인 제외 패턴
node_modules/
*.log
.env
.DS_Store
dist/
build/

# 이미 추적 중인 파일을 제외하려면
git rm --cached <파일명>
```