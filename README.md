# velog clone project
## 소개

### 목적  
- 컨벤션을 연습하고, 토의하기 위한 프로젝트입니다.
- velog main, write, detail 구현
- 컨벤션에 집중하고, 기능 구현은 최소한으로 한다.
- issue기반으로 repository를 만들고, 삭제합니다.

## convention

### 파일구조
```
|   App.css
|   App.test.tsx
|   App.tsx
|   index.tsx
|   react-app-env.d.ts
|   reportWebVitals.ts
|   setupTests.ts
|
+---assets
|   \---img
|           heart.png
|           logo.png
|
+---components
|   |   ProfileImage.tsx
|   |
|   \---ui
|           Card.tsx
|           Header.tsx
|           MyImage.tsx
|
+---pages
|   +---detail
|   |       index.tsx
|   |
|   +---main
|   |   |   index.tsx
|   |   |
|   |   +---body
|   |   |   |   index.tsx
|   |   |   |
|   |   |   +---postsection
|   |   |   |       index.css
|   |   |   |       index.tsx
|   |   |   |       postcard.css
|   |   |   |       PostCard.tsx
|   |   |   |
|   |   |   \---tabsection
|   |   \---header
|   |           index.css
|   |           index.tsx
|   |
|   \---write
|           index.tsx
|
+---redux
|   |   hooks.ts
|   |   store.ts
|   |
|   \---slice
|           postSlice.ts
|
\---styles
        common.css
        header.css
```
### css

- css파일을 이용합니다.
- classname의 중복을 이용하여 code의 재활용성을 높입니다.
- classname의 일치를 도모합니다.
- 예시
```
<div className='footer flex  space-between align-center'>
</div>
...


.flex-row{
flex-direction: row;
}

.flex-column{
    flex-direction: column;
}

.space-between{
    justify-content: space-between;
}
.justify-center{
    justify-content: center;
}
.align-center{
    align-items: center;
}
```

---

### TEAM

| Position | Name   | github                        |
| -------- | ------ | ----------------------------- |
| FE       | 하병노 | https://github.com/hahbr88    |
| FE       | 유대훈 | https://github.com/youdaehoon |

---

### Commit Convention

| tag      | descreiption                                      |
| -------- | ------------------------------------------------- |
| feat     | 기능 완성                                         |
| create   | 파일 생성                                         |
| fix      | 버그 수정                                         |
| modify   | 파일 수정                                         |
| refactor | 코드 리팩토링                                     |
| style    | 스타일 생성 밎 수정                               |
| chore    | packaege 추가 밎 script, webpack 등등 config 파일 |
| docs     | Readme 문서 수정                                  |
