# CRUD (Create, Read, Update, Delete)

## Markup
users.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>CRUD</title>
<script defer src="./js/users.js"></script>
</head>
<body>
<h1>CRUD</h1>
<hr />
<div>
  <h2>Read</h2>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Modify</th>
      </tr>
    </thead>
    <tbody id="tbody-users"></tbody>
  </table>
  <table style="display: none;">
    <tbody>
      <tr id="tr-template-users">
        <td name="users-name"></td>
        <td><input type="text" placeholder="Age" name="users-age" /></td>
        <td>
          <button name="users-update" onclick="usersUpdate(index)">Update</button>
          <button name="users-delete" onclick="usersDelete(index)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<hr />
<div>
  <h2>Create</h2>
  <input type="text" placeholder="Name" id="user-name" />
  <input type="text" placeholder="Age" id="user-age" />
  <button onclick="usersCreate()">Create</button>
</div>
</body>
</html>
```

## CRUD users
./js/users.js
```js
// users 배열 만들기
const users = [];
// users.push 메서드를 이용해 user 2명 넣기, name과 age
users.push({
  name: '홍길동',
  age: 40
});
users.push({
  name: '춘향이',
  age: 20
});
// users for문에서 name과 age console.log 찍기
for (let index = 0; index < users.length; index++) {
  console.log(users[index].name, users[index].age);
}
// 2번째 user 정보 바꾸기
users[1] = {
  name: '심청이',
  age: 16
};
// 2번째 user 지우기
users.splice(1, 1);
```

## Create
```js
const usersCreate = function() {
  users.push({
    name: document.getElementById('user-name').value,
    age: document.getElementById('user-age').value
  });
  console.log('Done usersCreate');
  usersRead();
};
```

## CRUD tbody (users 배열과 상관 없이)
```js
// tbody 객체 받기
const tbody = document.getElementById('tbody-users');
// 새로운 tr을 document.createElement('tr') 메소드로 생성하고, innerHTML에 '<td>1</td>' 넣기
const tr = document.createElement('tr');
tr.innerHTML = '<td>1</td>';
// tbody에 .appendChild 메소드 첫번째 인수로 tr 객체를 받아서 추가 시킴
tbody.appendChild(tr);
// tr 객체를 복사해서 trClone 상수에 넣기 (.cloneNode(true) 메소드 사용)
const trClone = tr.cloneNode(true);
// tbody에 trClone 추가
tbody.appendChild(trClone);
// tbody 첫벗째 자식의 innerHTML을 '<td>2</td>'으로 수정 (.children으로 자식 배열 접근)
tbody.children[0].innerHTML = '<td>2</td>';
// tbody 두번째 자식 삭제 (.removeChild(자식) 사용)
// tbody 첫번째 자식 삭제
tbody.removeChild(tbody.children[1]);
tbody.removeChild(tbody.children[0]);
```

## Read
```js
const usersRead = function() {
  const tbody = document.getElementById('tbody-users');
  while (tbody.children.length) {
    tbody.removeChild(tbody.children[0]);
  }
  for (let index = 0; index < users.length; index++) {
    const user = users[index];
    const tr = document.getElementById('tr-template-users').cloneNode(true);
    tbody.appendChild(tr);
    document.getElementsByName('users-name')[index].innerHTML = user.name;
    document.getElementsByName('users-age')[index].value = user.age;
    document.getElementsByName('users-update')[index].index = index;
    document.getElementsByName('users-delete')[index].index = index;
  }
  console.log('Done usersRead');
};
```

## Update
```js
const usersUpdate = function(index) {
  users[index] = {
    name: document.getElementsByName('users-name')[index].innerHTML,
    age: document.getElementsByName('users-age')[index].value
  };
  console.log('Done usersUpdate');
  usersRead();
};
```

## Delete
```js
const usersDelete = function(index) {
  users.splice(index, 1);
  console.log('Done usersDelete');
  usersRead();
};
```

## Finally
```js
usersRead();
```

# Ajax
* 2000년 초반까지 서버와 통신할 경우 페이지 이동이 필요 했는데, Ajax를 이용하면 페이지 이동 없이 통신이 가능하다.
* GET과 POST만 사용 할 수 있던 기존 통신 METHOD에서, OPTION, PATCH, PUT, DELETE 등 다양한 METHOD를 이용해 REST API 통신이 유행됐다.

## Backend Server
* [Download](https://github.com/ovdncids/vue-curriculum/raw/master/download/express-server.zip)
```sh
# BE 서버 실행 방법
npm install
node index.js
# 터미널 종료
Ctrl + c
```

## Basic
```js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState !== 4) return;
  if (xhr.status === 200) {
    // 통신 완료 후 실행할 부분
    console.log('Done', xhr.responseText);
  } else {
    // 통신 도중 에러가 발생 할때 실행할 부분
    const error = {
      status: xhr.status,
      statusText: xhr.statusText,
      responseText: xhr.responseText
    }
    console.error(error);
  }
};
xhr.open('METHOD', 'http://url');
// Content-Type이 없으면 xhr.send로 넘기는 값을 서버에서 못 읽음
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({}));
```

## Ajax Create
```js
const usersCreate = function() {
  const user = {
    name: document.getElementById('user-name').value,
    age: document.getElementById('user-age').value
  };
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log('Done usersCreate', xhr.responseText);
      usersRead();
    } else {
      const error = {
        status: xhr.status,
        statusText: xhr.statusText,
        responseText: xhr.responseText
      }
      console.error(error);
    }
  };
  xhr.open('POST', 'http://localhost:3100/api/v1/users');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(user));
};
```

## Ajax Read
```js
const usersRead = function() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      const users = JSON.parse(xhr.responseText).users;
      const tbody = document.getElementById('tbody-users');
      while (tbody.children.length) {
        tbody.removeChild(tbody.children[0]);
      }
      for (let index = 0; index < users.length; index++) {
        const user = users[index];
        const tr = document.getElementById('tr-template-users').cloneNode(true);
        tbody.appendChild(tr);
        document.getElementsByName('users-name')[index].innerHTML = user.name;
        document.getElementsByName('users-age')[index].value = user.age;
        document.getElementsByName('users-update')[index].index = index;
        document.getElementsByName('users-delete')[index].index = index;
      }
      console.log('Done usersRead', xhr.responseText);
    } else {
      const error = {
        status: xhr.status,
        statusText: xhr.statusText,
        responseText: xhr.responseText
      }
      console.error(error);
    }
  };
  xhr.open('GET', 'http://localhost:3100/api/v1/users');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
};
```

## Ajax Update
```js
const usersUpdate = function(index) {
  const user = {
    name: document.getElementsByName('users-name')[index].innerHTML,
    age: document.getElementsByName('users-age')[index].value
  };
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log('Done usersUpdate', xhr.responseText);
      usersRead();
    } else {
      const error = {
        status: xhr.status,
        statusText: xhr.statusText,
        responseText: xhr.responseText
      }
      console.error(error);
    }
  };
  xhr.open('PATCH', 'http://localhost:3100/api/v1/users');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    index: index,
    user: user
  }));
};
```

## Ajax Delete
```js
const usersDelete = function(index) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log('Done usersDelete', xhr.responseText);
      usersRead();
    } else {
      const error = {
        status: xhr.status,
        statusText: xhr.statusText,
        responseText: xhr.responseText
      }
      console.error(error);
    }
  };
  xhr.open('DELETE', 'http://localhost:3100/api/v1/users/' + index);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
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
* Callback 함수 설명
* React 또는 Vue.js와 비교해 보기

## Axios
https://github.com/axios/axios
* ❔ 공통 부분 함수화를 Axios로 수정 하기
