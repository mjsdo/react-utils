# React-utils

재사용할 수 있는 리액트 코드 모음

[DOCS](https://mjsdo.github.io/react-utils/)

## scripts

의존성 설치

```zsh
yarn
```

빌드

```zsh
# 변경된 패키지만 빌드
yarn build

# 모든 패키지 빌드
yarn build:all
```

변경된 패키지만 테스트

```zsh
# vitest
yarn test

# cypress-component
yarn cy:component

# cypress e2e (storybook + cypress)
yarn cy:e2e
```

스토리북 데브서버

```zsh
yarn storybook
```

Cypress 데브서버

```zsh
yarn cy:open
```

Type Check

```zsh
yarn type
```

모든 패키지에 대해서 태스크 수행하기

```zsh
yarn nx run-many -t <targetTaskName>
```

## note

- Cypress headless mode 테스트가 `windows 11`에서 실행되지 않을 수 있음
