# Ajax
* 2000년 초반까지 서버와 통신할 경우 페이지 이동이 필요 했는데(form 태그 사용), Ajax를 이용하면 페이지 이동 없이 통신이 가능하다.
* GET과 POST만 사용 할 수 있던 기존 통신 METHOD에서, OPTION, PATCH, PUT, DELETE 등 다양한 METHOD를 이용해 REST API 통신이 유행됐다.

## 구조
```js
const xhrObject = new XMLHttpRequest();
xhrObject.onreadystatechange = function() {
  if (xhrObject.readyState !== 4) return;
  if (xhrObject.status === 200) {
    // 통신 완료 후 실행할 부분
    console.log('Done', xhrObject.responseText);
  } else {
    // 통신 도중 에러가 발생할 때 실행할 부분
    const error = {
      status: xhrObject.status,
      statusText: xhrObject.statusText,
      responseText: xhrObject.responseText
    }
    console.error(error);
  }
};
xhrObject.open('METHOD', 'http://url');
// Content-Type이 없으면 xhrObject.send로 넘기는 값을 서버에서 못 읽음
xhrObject.setRequestHeader('Content-Type', 'application/json');
xhrObject.send(JSON.stringify({}));
```

## 파일과 통신
ajax/basicTemplate.html
```html
<div>
  <form method="get" onsubmit="event.preventDefault(); alert(this['template'].value);">
    <input type="text" name="template" value="Ajax done" placeholder="Name">
    <input type="submit" value="Alert">
  </form>
</div>
```

ajax/basicAJAX.html
```html
<body>
  <div><button onclick="ajaxTest()">Ajax run</button></div>
  <div id="tag-div"></div>
</body>
<script>
const ajaxTest = function() {
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function() {
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
      console.log('Done', xhrObject.responseText);
      const tagDiv = document.getElementById('tag-div');
      tagDiv.innerHTML = xhrObject.responseText;
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open('GET', './basicTemplate.html');
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send();
};
</script>
```
* VSCode 확장 `Live Server` 설치
* ❔ `xhrObject.open` url을 `./basicTemplate2.html`로 바꾼다면

## Backend와 통신

### node.js 설치

### Backend Server
* [Download](https://github.com/ovdncids/vue-curriculum/raw/master/download/express-server.zip)
```sh
# BE 서버 실행 방법
npm install
node index.js
# 터미널 종료
Ctrl + c
```

* ❕ `user` 구조를 `스키마` 또는 `모델`이라고 한다.


### Frontend Server
* [데모](https://ovdncids.github.io/javascript-curriculum/ajax/usersAJAX.html)
* ajax/usersAJAX.html <- [form/usersNoRefresh.html](https://raw.githubusercontent.com/ovdncids/javascript-curriculum/master/docs/form/usersObject.html)
* ajax/usersAJAX.js <- [form/usersNoRefresh.js](https://raw.githubusercontent.com/ovdncids/javascript-curriculum/master/docs/form/usersObject.js)

#### Create
```diff
- const usersCreate (삭제)
```
```js
const usersCreate = function(form) {
  const userNameObject = form['user-name'];
  const userAgeObject = form['user-age'];
  const user = {
    name: userNameObject.value,
    age: userAgeObject.value
  };
  const successFunction = function() {
    userNameObject.value = '';
    userAgeObject.value = '';
    usersRead();
  }
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function() {
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
      successFunction();
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open('POST', 'http://localhost:3100/api/v1/users');
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send(JSON.stringify(user));
};
```

#### Read
```diff
- const usersGet = sessionStorage.getItem('users');
- const usersLogical = usersGet || '[]';
- const users = JSON.parse(usersLogical);
+ let users;
```

```diff
- const usersRead (삭제)
```
```js
const usersRead = function() {
  const successFunction = function(xhrObject) {
    const usersLogical = JSON.parse(xhrObject.responseText);
    users = usersLogical.users;
    const tagDivParent = document.getElementById('tag-div-parent');
    tagDivParent.innerHTML = '';
    const tagDivChild = document.getElementById('tag-div-child');
    for (let index in users) {
      const newDivChild = tagDivChild.cloneNode(true);
      tagDivParent.appendChild(newDivChild);
      const usersNameObject = document.getElementsByName('users-name')[index];
      const usersAgeObject = document.getElementsByName('users-age')[index];
      const usersUpdateObject = document.getElementsByName('users-update')[index];
      const usersDeleteObject = document.getElementsByName('users-delete')[index];
      usersNameObject.value = users[index].name;
      usersAgeObject.value = users[index].age;
      usersUpdateObject.index = index;
      usersDeleteObject.index = index;
    }
    console.log('Read', users);
  };
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function () {
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
      successFunction(xhrObject);
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open('GET', 'http://localhost:3100/api/v1/users');
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send();
};
```

#### Delete
```diff
- const usersDelete (삭제)
```
```js
const usersDelete = function(index) {
  const url = 'http://localhost:3100/api/v1/users/' + index;
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function () {
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
      usersRead();
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open('DELETE', url);
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send();
};
```

#### Update
```diff
- const usersUpdate (삭제)
```
```js
const usersUpdate = function(index) {
  const url = 'http://localhost:3100/api/v1/users/' + index;
  const name = document.getElementsByName('users-name')[index].value;
  const age = document.getElementsByName('users-age')[index].value;
  const user = {
    name: name,
    age: age
  };
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function () {
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
      usersRead();
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open('PATCH', url);
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send(JSON.stringify(user));
};
```
* RESTful API 설명
* ❔ 브라우저에서 주소 치고 들어가는 것은 무조건 무슨 메소드 인가
* 404, 400, 403, 500 에러 보여주기
  ```
  404: backend쪽 페이지가 없는 경우
  400: frontend쪽에서 정보가 재대로 넘어 오지 않은 경우
  403: 인증관련 에러 (로그인이 제대로 되지 않은 경우)
  500: backend쪽 에러 (backend 문법 오류 또는 DB가 멈춰 있는 경우)
  ```
* ❔ 공통 부분 함수화 하기(리팩토링)
  ```js
  const ajax = function(method, url, data, callback) {
    ...
  };
  ```
* `Create`, `Delete`, `Update`, `Read` 순서
* ❕ 통신 부분 주석은 리팩토링 완료 후 따로 삭제
* Callback 함수 설명
* React 또는 Vue.js와 비교해 보기

## Axios
https://github.com/axios/axios
* [데모](https://ovdncids.github.io/javascript-curriculum/ajax/usersAxios.html)
* ❔ 공통 부분 함수화를 Axios로 수정 하기
```diff
const usersRead = function() {
- const successFunction = function(xhrObject) {
-   const usersLogical = JSON.parse(xhrObject.responseText);
```
```js
const usersRead = function() {
  const successFunction = function(response) {
    const usersLogical = response.data;
```

* ❔ `usersRead`안에 `successFunction` 상수를 삭제하고, 해당 `함수`를 `.then()` 안에 넣기

### 쿠키로 로그인 할때 도메인이 틀려질 경우 설정
```js
const api = axios.create({
  baseURL: ...,
  withCredentials: true
});
```
* 서버쪽에서도 [Credentials](https://github.com/ovdncids/react-curriculum/blob/35c38236b5ce72eb5944d7d06a31f067feeed56b/Express.md#%EC%84%9C%EB%A1%9C-%EB%8B%A4%EB%A5%B8-%EB%8F%84%EB%A9%94%EC%9D%B8-%EA%B0%84%EC%97%90-cookie-%EA%B3%B5%EC%9C%A0) 설정 해줘야 한다.

### Ubuntu Axios GET통신에서 인코딩이 깨질때
* https://github.com/axios/axios/issues/5296

### Typescript
* https://github.com/ovdncids/angular-curriculum/blob/master/Typescript.md#axios-error-%ED%83%80%EC%9E%85-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0
