# React-utils

재사용할 수 있는 리액트 코드 모음

## scripts

변경된 패키지만 빌드

```zsh
yarn build
```

변경된 패키지만 테스트 (vitest)

```zsh
yarn test
```

변경된 패키지만 테스트 (cypress-component-test)

```zsh
yarn cy:component
```

스토리북 데브서버

```zsh
yarn storybook
```

Cypress 데브서버

```zsh
yarn cy:open
```

모든 패키지에 대해서 태스크 수행하기

```zsh
yarn nx run-many -t <targetTaskName>
```
