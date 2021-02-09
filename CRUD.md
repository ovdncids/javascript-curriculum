# CRUD (Create, Read, Update, Delete)

## Backend
* [Download](https://github.com/ovdncids/vue-curriculum/raw/master/download/node-server.zip)
```sh
# BE 서버 실행 방법
node install
node index.js
# 터미널 종료
Ctrl + c
```

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
              <button name="members-update" onclick="memberUpdate(index)">Update</button>
              <button name="members-delete" onclick="memberDelete(index)">Delete</button>
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
      <button onclick="memberCreate()">Create</button>
    </div>
  </body>
</html>
```

## CRUD members
./js/members.js
```js
// members 배열 만들기
const members = [];
// member 2명 넣기, name과 age
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
const memberCreate = function() {
  members.push({
    name: document.getElementById('member-name').value,
    age: document.getElementById('member-age').value
  });
  console.log('Done memberCreate');
  membersRead();
};
```

## CRUD tbody
```js
// tbody 객체 받기
const tbody = document.getElementById('tbody-members');
// 새로운 tr을 document.createElement으로 생성하고, innerHTML에 td 넣기
const tr = document.createElement('tr');
tr.innerHTML = '<td>1</td>';
// tbody에 appendChild로 tr을 추가
tbody.appendChild(tr);
// tbody에 appendChild로 tr 복사한것을 추가
tbody.appendChild(tr.cloneNode(true));
// tbody 첫벗째 자식을 innerHTML을 수정
tbody.children[0].innerHTML = '<td>2</td>';
tbody 두번째 자식 삭제, 첫번째 자식 삭제
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
const memberUpdate = function(index) {
  members[index] = {
    name: document.getElementsByName('members-name')[index].innerHTML,
    age: document.getElementsByName('members-age')[index].value
  };
  console.log('Done memberUpdate');
  membersRead();
};
```

## Delete
```js
const memberDelete = function(index) {
  members.splice(index, 1);
  console.log('Done memberDelete');
  membersRead();
};
```

## Finally
```js
membersRead();
```

## Ajax Create
```js
const memberCreate = function() {
  const member = {
    name: document.getElementById('member-name').value,
    age: document.getElementById('member-age').value
  };
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log('Done memberCreate', xhr.responseText);
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
  xhr.setRequestHeader('Content-type', 'application/json');
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
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send();
};
```

## Ajax Update
```js
const memberUpdate = function(index) {
  const member = {
    name: document.getElementsByName('members-name')[index].innerHTML,
    age: document.getElementsByName('members-age')[index].value
  };
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log('Done memberUpdate', xhr.responseText);
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
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({
    index: index,
    member: member
  }));
};
```

## Ajax Delete
```js
const memberDelete = function(index) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log('Done memberDelete', xhr.responseText);
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
  xhr.setRequestHeader('Content-type', 'application/json');
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
