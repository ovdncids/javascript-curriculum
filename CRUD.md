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
            <th>Created Date</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody id="tbody-members">
        </tbody>
      </table>
      <table style="display: none;">
        <tbody id="tbody-template-members">
          <tr>
            <td><input type="text" placeholder="Name" name="members-name" /></td>
            <td><input type="text" placeholder="Age" name="members-age" /></td>
            <td></td>
            <td>
              <button name="button-members-update" onclick="membersUpdate(event)">Update</button>
              <button name="button-members-delete" onclick="membersDelete(event)">Delete</button>
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

## Create
./js/members.js
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
      console.log(xhr.responseText);
      console.warn('서버에 생성 완료');
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

## Read
```js
const membersRead = function() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      console.warn('서버의 리스트 읽기 완료');
      const members = JSON.parse(xhr.responseText).members;
      const tbodyMembers = document.getElementById('tbody-members');
      const tbodyTemplateMembers = document.getElementById('tbody-template-members');
      while (tbodyMembers.children.length) {
        tbodyMembers.removeChild(tbodyMembers.children[0]);
      }
      for (let index = 0; index < members.length; index++) {
        const member = members[index];
        const trMember = tbodyTemplateMembers.children[0].cloneNode(true);
        tbodyMembers.appendChild(trMember);
        document.getElementsByName('members-name')[index].value = member.name;
        document.getElementsByName('members-age')[index].value = member.age;
        trMember.children[2].innerHTML = member.createdDate;
      }
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

## Update
```js
const membersUpdate = function(event) {
  const eventElement = event.currentTarget || event.srcElement;
  let index = 0;
  for (; index < document.getElementsByName(eventElement.name).length; index++) {
    if (srcElement === document.getElementsByName(eventElement.name)[index]) break;
  }
  const member = {
    name: document.getElementsByName('members-name')[index].value,
    age: document.getElementsByName('members-age')[index].value
  };
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      membersRead();
      console.warn('서버에 수정 완료');
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

## Delete
```js
const membersDelete = function(event) {
  const eventElement = event.currentTarget || event.srcElement;
  let index = 0;
  for (; index < document.getElementsByName(eventElement.name).length; index++) {
    if (srcElement === document.getElementsByName(eventElement.name)[index]) break;
  }
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      console.warn('서버에 삭제 완료');
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

## Finally
```js
membersRead();
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
