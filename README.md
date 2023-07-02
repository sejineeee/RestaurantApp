# Restaurant app

## 프로젝트 소개

코드숨 프론트엔드 마스터 React 교육 마지막 주차의 프로젝트로 REST API를 이용하여 지역과 종류를 선택하면 해당 음식점 페이지가 렌더링되고, 리뷰를 작성할 수 있는 레스토랑 웹사이트를 구현하였습니다.

### 프로젝트 기간

```plaintext
2022. 10 ~ 2022. 12
```

### 웹 배포 링크

https://restaurant-jin.netlify.app/

### 프로젝트 설치 및 실행 방법

#### 설치

```plaintext
npm i
```

#### 실행

```plaintext
npm start
```

### 기술 스택

- React
- React-router-dom
- Redux Toolkit
- Jest
- React Testing Library
- Emotion

### 디렉토리 구조

```
src
 ┣ assets
 ┣ components
 ┃ ┗ Header
 ┃ ┗ LogoutForm
 ┃ ┗ LogoutFormContainer
 ┃ ┗ Modal
 ┃ ┗ Pagination
 ┃ ┗ ReviewForm
 ┃ ┗ SlideContainer
 ┃ ┗ SlideItem
 ┃ ┗ TextField
 ┣ pages
 ┃ ┗ AboutPage
 ┃ ┗ HomePage
 ┃ ┗ LoginPage
 ┃   ┗ LoginForm
 ┃   ┗ LoginFormContainer
 ┃   ┗ LoginPage
 ┃ ┗ NotFoundPage
 ┃ ┗ RestaurantPage
 ┃   ┗ MenuItems
 ┃   ┗ RestaurantContainer
 ┃   ┗ RestaurantDetail
 ┃   ┗ RestaurantPage
 ┃   ┗ Reviews
 ┃ ┗ RestaurantsPage
 ┃ ┗ NotFoundPage
 ┃   ┗ CategoriesContainer
 ┃   ┗ Regions
 ┃   ┗ RegionsContainer
 ┃   ┗ RestaurantsContainer
 ┃   ┗ RestaurantsPage
 ┣ services
 ┃ ┗ __mocks__
 ┃   ┗ api
 ┃   ┗ storage
 ┃ ┗ api
 ┃ ┗ storage
 ┣ App
 ┣ async-action
 ┣ index
 ┣ slice
 ┣ store
 ┗ utils
```

### 기능

- 슬라이드

![slide](https://github.com/sejineeee/RestaurantApp/assets/86041335/c516ebd5-7b31-4e65-82d3-8ea588c36856)

자동으로 슬라이드 되는 기능과 슬라이드를 조작할 수 있는 버튼을 이용할 수 있도록 구현하였습니다.

- 로그인 / 로그아웃

![login/logout](https://github.com/sejineeee/RestaurantApp/assets/86041335/6667daa2-9875-4d16-9deb-08e5be638675)

- 모달창

![GIFMaker_me (3)-min](https://github.com/sejineeee/RestaurantApp/assets/86041335/7ed91deb-f70a-435b-97ec-95a9cf059cec)

리뷰 작성 폼을 모달창으로 구현하였습니다.


- 페이지네이션

![pagination](https://github.com/sejineeee/RestaurantApp/assets/86041335/d72e155e-d4a6-4c76-bb03-6c2eebd4e4a5)

리뷰를 좀 더 편하게 볼 수 있도록 하기 위해 페이지네이션 기능을 구현하였습니다.

<br />
<br />

---
### 느낀 점

개인 프로젝트를 진행하면서 처음에는 디자인이 마음에 들지 않아서 다시 디자인하여 만들었습니다. 디자인을 고민하면서 그에 맞게 기능에 대해서도 고민을 하였고, 모달 / 페이지네이션 / 슬라이드 버튼 기능 등을 추가하게 되었습니다.

또한 이번 개인 프로젝트에서는 Netlify 사이트를 통해서 웹 배포까지 해보았습니다. 웹 배포를 하는 과정에서 build를 여러 번 실패하며, eslint 플러그인으로 인해서 PropTypes도 지정해보고, deploy 설정도 바꾸어보고, base 태그, redirects, package.json, webpack config 등을 변경하며 여러 시행착오를 겪었습니다.

이번 기회를 통해 웹 배포, 디자인, 기능 등에 대해서 깊게 고민해볼 수 있었습니다.