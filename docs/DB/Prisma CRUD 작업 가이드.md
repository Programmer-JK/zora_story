>작성일 : 2024.12.23

# Prisma CRUD 작업 가이드

## 1. Create (생성)

### 단일 레코드 생성
```typescript
const user = await prisma.user.create({
  data: {
    email: 'user@example.com',
    name: '홍길동',
    posts: {
      create: {
        title: '첫 게시글'
      }
    }
  }
})
```

### 다중 레코드 생성
```typescript
const users = await prisma.user.createMany({
  data: [
    { email: 'user1@example.com' },
    { email: 'user2@example.com' }
  ],
  skipDuplicates: true
})
```

## 2. Read (조회)

### 단일 레코드 조회
```typescript
const user = await prisma.user.findUnique({
  where: { id: 1 }
})
```

### 다중 레코드 조회
```typescript
const users = await prisma.user.findMany({
  where: {
    email: { contains: '@example.com' }
  },
  orderBy: { createdAt: 'desc' },
  take: 10,
  skip: 0
})
```

### 조건부 조회
```typescript
const users = await prisma.user.findMany({
  where: {
    OR: [
      { email: { contains: 'test' } },
      { name: { contains: '홍' } }
    ]
  }
})
```

### 관계 포함 조회
```typescript
const userWithPosts = await prisma.user.findUnique({
  where: { id: 1 },
  include: {
    posts: true,
    profile: true
  }
})
```

## 3. Update (수정)

### 단일 레코드 수정
```typescript
const user = await prisma.user.update({
  where: { id: 1 },
  data: { name: '새이름' }
})
```

### 다중 레코드 수정
```typescript
const users = await prisma.user.updateMany({
  where: { role: 'USER' },
  data: { verified: true }
})
```

### Upsert (생성 또는 수정)
```typescript
const user = await prisma.user.upsert({
  where: { email: 'user@example.com' },
  create: { email: 'user@example.com', name: '새사용자' },
  update: { name: '업데이트된이름' }
})
```

## 4. Delete (삭제)

### 단일 레코드 삭제
```typescript
const user = await prisma.user.delete({
  where: { id: 1 }
})
```

### 다중 레코드 삭제
```typescript
const users = await prisma.user.deleteMany({
  where: {
    email: { contains: '@test.com' }
  }
})
```

### 연관 레코드 삭제 (트랜잭션)
```typescript
const [posts, user] = await prisma.$transaction([
  prisma.post.deleteMany({ where: { authorId: 1 } }),
  prisma.user.delete({ where: { id: 1 } })
])
```

## 5. 고급 쿼리 기능

### 선택적 필드 조회
```typescript
const user = await prisma.user.findUnique({
  where: { id: 1 },
  select: {
    id: true,
    name: true,
    posts: {
      select: {
        title: true
      }
    }
  }
})
```

### 집계 함수
```typescript
const stats = await prisma.user.aggregate({
  _count: { id: true },
  _avg: { age: true },
  where: { role: 'USER' }
})
```

### 그룹화
```typescript
const grouped = await prisma.post.groupBy({
  by: ['authorId'],
  _count: { id: true },
  having: {
    id: { _count: { gt: 10 } }
  }
})
```

### 중첩 관계 쿼리
```typescript
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: {
    posts: {
      include: {
        comments: {
          include: {
            author: true
          }
        }
      }
    }
  }
})
```