# GoldKiwi Boilerplate

NestJS 기반의 백엔드 프로젝트 보일러플레이트입니다.

## 📋 목차

- [기술 스택](#기술-스택)
- [시작하기](#시작하기)
- [프로젝트 구조](#프로젝트-구조)
- [스크립트](#스크립트)
- [개발 가이드](#개발-가이드)
- [테스트](#테스트)
- [배포](#배포)

## 🛠 기술 스택

### 핵심 프레임워크
- **NestJS** (v11.0.1) - Node.js 백엔드 프레임워크
- **TypeScript** (v5.7.3) - 타입 안정성을 위한 언어
- **Express** - HTTP 서버 플랫폼

### 데이터베이스
- **Prisma** (v7.3.0) - ORM 및 데이터베이스 관리 도구

### 유틸리티
- **class-validator** - DTO 검증
- **class-transformer** - 객체 변환
- **axios** - HTTP 클라이언트
- **cookie-parser** - 쿠키 파싱

### API 문서화
- **Swagger** (@nestjs/swagger) - API 문서 자동 생성

### 개발 도구
- **ESLint** - 코드 린팅
- **Prettier** - 코드 포맷팅
- **Jest** - 테스트 프레임워크

## 🚀 시작하기

### 필수 요구사항

- Node.js (v18 이상 권장)
- npm 또는 yarn
- 데이터베이스 (PostgreSQL, MySQL, SQLite 등)

### 설치

```bash
# 의존성 설치
npm install
```

### 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 필요한 환경 변수를 설정하세요:

```env
PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

### 데이터베이스 설정

Prisma를 사용하는 경우:

```bash
# Prisma 클라이언트 생성
npx prisma generate

# 데이터베이스 마이그레이션
npx prisma migrate dev

# Prisma Studio 실행 (선택사항)
npx prisma studio
```

### 애플리케이션 실행

```bash
# 개발 모드 (핫 리로드)
npm run start:dev

# 프로덕션 모드
npm run start:prod

# 디버그 모드
npm run start:debug
```

애플리케이션이 실행되면 `http://localhost:3000`에서 접근할 수 있습니다.

## 📁 프로젝트 구조

```
goldkiwi-boilerplate/
├── src/
│   ├── main.ts              # 애플리케이션 진입점
│   ├── app.module.ts        # 루트 모듈
│   ├── app.controller.ts    # 루트 컨트롤러
│   └── app.service.ts       # 루트 서비스
├── test/                    # E2E 테스트
├── prisma/                  # Prisma 스키마 및 마이그레이션
├── dist/                    # 빌드 출력 디렉토리
├── node_modules/            # 의존성 패키지
├── package.json
├── tsconfig.json            # TypeScript 설정
├── nest-cli.json            # NestJS CLI 설정
├── .prettierrc              # Prettier 포맷팅 설정
└── README.md
```

## 📜 스크립트

### 개발

```bash
# 개발 서버 시작 (핫 리로드)
npm run start:dev

# 일반 시작
npm run start

# 디버그 모드
npm run start:debug

# 프로덕션 빌드
npm run build

# 프로덕션 실행
npm run start:prod
```

### 코드 품질

```bash
# ESLint 실행 및 자동 수정
npm run lint

# Prettier로 코드 포맷팅
npm run format
```

### 테스트

```bash
# 단위 테스트 실행
npm run test

# 테스트 감시 모드
npm run test:watch

# 테스트 커버리지
npm run test:cov

# E2E 테스트
npm run test:e2e

# 디버그 모드 테스트
npm run test:debug
```

## 💻 개발 가이드

### 모듈 생성

```bash
# 컨트롤러 생성
nest generate controller [name]

# 서비스 생성
nest generate service [name]

# 모듈 생성
nest generate module [name]

# 전체 리소스 생성 (CRUD)
nest generate resource [name]
```

### API 문서 확인

Swagger가 설정되어 있다면 다음 URL에서 API 문서를 확인할 수 있습니다:

```
http://localhost:3000/api
```

### 코드 스타일

- ESLint와 Prettier가 자동으로 설정되어 있습니다
- 커밋 전에 `npm run lint`와 `npm run format`을 실행하는 것을 권장합니다

#### Prettier 설정

프로젝트는 `.prettierrc` 파일을 통해 Prettier 포맷팅 규칙을 정의합니다:

- **세미콜론**: 사용 (`semi: true`)
- **따옴표**: 작은따옴표 사용 (`singleQuote: true`)
- **Trailing Comma**: 모든 곳에 사용 (`trailingComma: "all"`)
- **줄 길이**: 최대 100자 (`printWidth: 100`)
- **들여쓰기**: 스페이스 2칸 (`tabWidth: 2`, `useTabs: false`)
- **괄호 공백**: 객체 리터럴 괄호 안 공백 사용 (`bracketSpacing: true`)
- **화살표 함수**: 매개변수 항상 괄호 사용 (`arrowParens: "always"`)
- **줄바꿈**: LF 사용 (`endOfLine: "lf"`)

코드 포맷팅을 적용하려면:

```bash
# 전체 프로젝트 포맷팅
npm run format

# 특정 파일만 포맷팅
npx prettier --write "src/**/*.ts"
```

## 🧪 테스트

### 단위 테스트

각 서비스와 컨트롤러에 대한 단위 테스트는 `.spec.ts` 파일에 작성합니다.

```bash
npm run test
```

### E2E 테스트

전체 애플리케이션의 엔드투엔드 테스트는 `test/` 디렉토리에 작성합니다.

```bash
npm run test:e2e
```

### 테스트 커버리지

```bash
npm run test:cov
```

커버리지 리포트는 `coverage/` 디렉토리에 생성됩니다.

## 🚢 배포

### 프로덕션 빌드

```bash
# 빌드
npm run build

# 프로덕션 실행
npm run start:prod
```

### 배포 전 체크리스트

- [ ] 환경 변수 설정 확인
- [ ] 데이터베이스 마이그레이션 실행
- [ ] 테스트 통과 확인
- [ ] 프로덕션 빌드 테스트
- [ ] 로깅 설정 확인
- [ ] 보안 설정 확인

## 📚 추가 리소스

- [NestJS 공식 문서](https://docs.nestjs.com)
- [Prisma 문서](https://www.prisma.io/docs)
- [TypeScript 문서](https://www.typescriptlang.org/docs)

## 📝 라이선스

이 프로젝트는 UNLICENSED입니다.
