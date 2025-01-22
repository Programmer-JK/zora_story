> 작성일: 2025.01.22

## 문제 상황

작년 회사를 다닐 당시, 하이브리드 앱에서 Storage 관련 이슈가 발견된 적이 있습니다. 특히 iOS 및 구형 안드로이드 디바이스에서 SecureStorage나 LocalStorage 사용 시 간헐적으로 undefined 에러가 발생하는 현상이 자주 발견되었고, 오늘은 그당시 상황에 기반하여 어떻게 해결했는지에 대해 정리해보려고 합니다.

### 증상
1. Storage에서 키 값을 가져올 때 undefined 에러 발생
2. Storage 데이터 삭제 시 undefined 에러 발생
3. 특히 구형 디바이스나 저사양 환경에서 빈번하게 발생
4. 화면 렌더링 실패나 앱 크래시로 이어지는 경우 발생

## 원인 분석

### 1. 비동기 처리 이슈
웹뷰를 사용하는 하이브리드 앱에서 SecureStorage는 네이티브 브리지를 통해 디바이스의 보안 스토리지에 접근합니다. 이 과정에서 발생할 수 있는 문제들은 다음과 같습니다:

```javascript
// 잠재적 문제가 있는 코드
const value = Storage.get('userToken'); // 비동기 작업
processUserData(value); // value가 준비되지 않은 상태에서 실행될 수 있음
```

- 네이티브 브리지 통신 지연
- 디바이스 리소스 부족으로 인한 응답 지연
- 비동기 작업의 동기적 처리 시도

### 2. Race Condition
Storage 접근과 데이터 사용 시점의 차이로 인한 타이밍 이슈가 발생할 수 있습니다:

- Storage 데이터 접근 전에 후속 코드 실행
- 데이터 삭제 작업과 읽기 작업의 순서 보장 실패
- 컨텍스트 전환으로 인한 데이터 정합성 문제

## 해결 방안

### 1. 방어적 프로그래밍 적용
```javascript
// Storage 작업을 위한 유틸리티 함수
function removeFromStorage(key) {
    if (key === undefined || key === null) {
        console.warn('Invalid key provided to removeFromStorage');
        return false;
    }
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error('Error removing from storage:', error);
        return false;
    }
}

// Storage 데이터 접근 함수
function getFromStorage(key) {
    if (key === undefined || key === null) {
        console.warn('Invalid key provided to getFromStorage');
        return null;
    }
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error('Error reading from storage:', error);
        return null;
    }
}
```

### 2. 비동기 처리 개선
Promise나 async/await를 활용한 안정적인 비동기 처리:

```javascript
class StorageService {
    async get(key) {
        try {
            return await this.secureStorage.get(key) ?? null;
        } catch (error) {
            console.error('Storage access error:', error);
            return null;
        }
    }

    async set(key, value) {
        try {
            await this.secureStorage.set(key, value);
            return true;
        } catch (error) {
            console.error('Storage write error:', error);
            return false;
        }
    }
}

// 사용 예시
async function handleUserData() {
    const storage = new StorageService();
    const userData = await storage.get('userData');
    if (userData) {
        // 데이터 처리
    }
}
```

### 3. 에러 모니터링 강화
```javascript
class StorageMonitor {
    static logError(operation, key, error) {
        const errorContext = {
            timestamp: new Date().toISOString(),
            operation,
            key,
            error: error.message,
            deviceInfo: {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                // 추가 디바이스 정보
            }
        };
        
        console.error('Storage operation failed:', errorContext);
        // 에러 로깅 시스템으로 전송
    }
}
```

## 장기적 개선 방안

1. **캐싱 메커니즘 도입**
   - 메모리 캐시 레이어 추가
   - 빈번한 Storage 접근 최소화

2. **테스트 강화**
   - 다양한 디바이스 환경에서의 테스트 케이스 추가
   - 스트레스 테스트 시나리오 구현

3. **모니터링 시스템 구축**
   - 실시간 에러 모니터링
   - 디바이스별 성능 메트릭 수집

## 결론
Storage 관련 이슈는 하이브리드 앱 개발에서 자주 마주치는 문제입니다. 단순히 undefined 체크만으로는 근본적인 해결이 어려우며, 다음과 같은 종합적인 접근이 필요합니다:

1. 철저한 방어적 프로그래밍
2. 비동기 처리에 대한 신중한 설계
3. 적절한 캐싱 전략
4. 체계적인 에러 처리와 모니터링
5. 다양한 환경에서의 테스트
