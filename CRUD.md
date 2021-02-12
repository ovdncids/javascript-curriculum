# CRUD (Create, Read, Update, Delete)

## Markup
members.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>CRUD</title>
    <script defer src="./js/members.js"></script>
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
        <tbody id="tbody-members"></tbody>
      </table>
      <table style="display: none;">
        <tbody>
          <tr id="tr-template-members">
            <td name="members-name"></td>
            <td><input type="text" placeholder="Age" name="members-age" /></td>
            <td>
              <button name="members-update" onclick="membersUpdate(index)">Update</button>
              <button name="members-delete" onclick="membersDelete(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    <div>
      <h2>Create</h2>
      <input type="text" placeholder="Name" id="member-name" />
      <input type="text" placeholder="Age" id="member-age" />
      <button onclick="membersCreate()">Create</button>
    </div>
  </body>
</html>
```

## CRUD members
./js/members.js
```js
// members 배열 만들기
const members = [];
// members.push 메서드를 이용해 member 2명 넣기, name과 age
members.push({
  name: '홍길동',
  age: 40
});
members.push({
  name: '춘향이',
  age: 20
});
// members for문에서 name과 age console.log 찍기
for (let index = 0; index < members.length; index++) {
  console.log(members[index].name, members[index].age);
}
// 2번째 member 정보 바꾸기
members[1] = {
  name: '심청이',
  age: 16
};
// 2번째 member 지우기
members.splice(1, 1);
```

## Create
```js
const membersCreate = function() {
  members.push({
    name: document.getElementById('member-name').value,
    age: document.getElementById('member-age').value
  });
  console.log('Done membersCreate');
  membersRead();
};
```

## CRUD tbody (members 배열과 상관 없이)
```js
// tbody 객체 받기
const tbody = document.getElementById('tbody-members');
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
const membersRead = function() {
  const tbody = document.getElementById('tbody-members');
  while (tbody.children.length) {
    tbody.removeChild(tbody.children[0]);
  }
  for (let index = 0; index < members.length; index++) {
    const member = members[index];
    const tr = document.getElementById('tr-template-members').cloneNode(true);
    tbody.appendChild(tr);
    document.getElementsByName('members-name')[index].innerHTML = member.name;
    document.getElementsByName('members-age')[index].value = member.age;
    document.getElementsByName('members-update')[index].index = index;
    document.getElementsByName('members-delete')[index].index = index;
  }
  console.log('Done membersRead');
};
```

## Update
```js
const membersUpdate = function(index) {
  members[index] = {
    name: document.getElementsByName('members-name')[index].innerHTML,
    age: document.getElementsByName('members-age')[index].value
  };
  console.log('Done membersUpdate');
  membersRead();
};
```

## Delete
```js
const membersDelete = function(index) {
  members.splice(index, 1);
  console.log('Done membersDelete');
  membersRead();
};
```

## Finally
```js
membersRead();
```

# Ajax
* 2000년 초반까지 서버와 통신할 경우 페이지 이동이 필요 했는데, Ajax를 이용하면 페이지 이동 없이 통신이 가능하다.
* GET과 POST만 사용 할 수 있던 기존 통신 METHOD에서, OPTION, PATCH, PUT, DELETE 등 다양한 METHOD를 이용해 REST API 통신이 유행됐다.

## Backend Server
* [Download](https://github.com/ovdncids/vue-curriculum/raw/master/download/express-server.zip)
```sh
# BE 서버 실행 방법
node install
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
const membersCreate = function() {
  const member = {
    name: document.getElementById('member-name').value,
    age: document.getElementById('member-age').value
  };
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log('Done membersCreate', xhr.responseText);
      membersRead();
    } else {
      const error = {
        status: xhr.status,
        statusText: xhr.statusText,
        responseText: xhr.responseText
      }
      console.error(error);
    }
  };
  xhr.open('POST', 'http://localhost:3100/api/v1/members');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(member));
};
```

## Ajax Read
```js
const membersRead = function() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      const members = JSON.parse(xhr.responseText).members;
      const tbody = document.getElementById('tbody-members');
      while (tbody.children.length) {
        tbody.removeChild(tbody.children[0]);
      }
      for (let index = 0; index < members.length; index++) {
        const member = members[index];
        const tr = document.getElementById('tr-template-members').cloneNode(true);
        tbody.appendChild(tr);
        document.getElementsByName('members-name')[index].innerHTML = member.name;
        document.getElementsByName('members-age')[index].value = member.age;
        document.getElementsByName('members-update')[index].index = index;
        document.getElementsByName('members-delete')[index].index = index;
      }
      console.log('Done membersRead', xhr.responseText);
    } else {
      const error = {
        status: xhr.status,
        statusText: xhr.statusText,
        responseText: xhr.responseText
      }
      console.error(error);
    }
  };
  xhr.open('GET', 'http://localhost:3100/api/v1/members');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
};
```

## Ajax Update
```js
const membersUpdate = function(index) {
  const member = {
    name: document.getElementsByName('members-name')[index].innerHTML,
    age: document.getElementsByName('members-age')[index].value
  };
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log('Done membersUpdate', xhr.responseText);
      membersRead();
    } else {
      const error = {
        status: xhr.status,
        statusText: xhr.statusText,
        responseText: xhr.responseText
      }
      console.error(error);
    }
  };
  xhr.open('PATCH', 'http://localhost:3100/api/v1/members');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    index: index,
    member: member
  }));
};
```

## Ajax Delete
```js
const membersDelete = function(index) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log('Done membersDelete', xhr.responseText);
      membersRead();
    } else {
      const error = {
        status: xhr.status,
        statusText: xhr.statusText,
        responseText: xhr.responseText
      }
      console.error(error);
    }
  };
  xhr.open('DELETE', 'http://localhost:3100/api/v1/members/' + index);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
};
```

## 생각해 보기
* Callback 함수 설명 하기
* 404, 400, 500, 403 에러 보여주기
* ❔ 브라우저에서 주소 치고 들어가는 것은 무조건 무슨 메소드 인가?
* ❔ 공통 부분 함수화 하기
* React 또는 Vue.js와 비교해 보기
* RESTful API 알아보기

## Axios
https://github.com/axios/axios
* ❔ 공통 부분 함수화를 Axios로 수정
