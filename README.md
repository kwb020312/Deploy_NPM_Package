# NPM

<a href="www.npmjs.com">NPM</a>

<img src="./gitImages/npm_logo.png">

Node Package Manager 로써 , 필요한 파일을 Publish , Install 할 수 있는 도구이다.

<img src="./gitImages/npm_init.PNG">

```javascript
npm init
```

을 하게되면 위와같은 옵션들을 설정할 수 있는데
name 의 경우

```javascript
npm install @chobby/hi
```

로 접근할 수 있게 한다는 뜻이며 main 은 내 모듈 패키지의 중심이 될 파일의 이름을 적는 것 이다.

# NPM Publish

npm을 등록하기 위해서는 홈페이지에서 계정을 등록해야한다.

```javascript
npm login
```

<img src="./gitImages/npm_login.PNG">

정상적으로 처리한다면 해당 로그를 볼 수 있다.

<img src="./gitImages/npm_auth_error.PNG">

꼭 홈페이지에 들어가서 이메일 인증을 해주어야 위의 에러를 피할 수 있다.

```javascript
npm publish --access public
```

우리의 패키지를 npm에 공개적으로 등록한다
(비공개는 유료이다.)

같은 버전은 등록할 수 없으므로 package.json 의 버전을 항상 수정해주어야 한다.

# 다음버전 배포

```javascript
npm publish
```

다음 버전을 배포할 때 에는 그냥 npm publish 만 해주면 된다.

# 사용자의 입장

```javascript
npm init -y
// npm 의 기본정보들로 package.json 파일을 생성
npm i @chobby/hi
// 내 패키지 다운로드
npm outdated
// 새 버전이 나왔다면 업데이트
```
