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
            <td><input type="text" placeholder="Name" name="member-name" /></td>
            <td><input type="text" placeholder="Age" name="member-age" /></td>
            <td></td>
            <td>
              <button name="member-update" onclick="update(event)">Update</button>
              <button name="member-delete" onclick="del(event)">Delete</button>
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
      <button onclick="create()">Create</button>
    </div>
  </body>
</html>
```

## Create
./js/members.js
```js
const create = function() {
  const member = {
    name: document.getElementById('member-name').value,
    age: document.getElementById('member-age').value
  };
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      read();
      console.warn('생성 완료');
    } else {
      const error = {
        status: xhr.status,
        statusText: xhr.status,
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
const read = function() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      const members = JSON.parse(xhr.responseText).members;
      const tbodyMembers = document.getElementById('tbody-members');
      const tbodyTemplateMembers = document.getElementById('tbody-template-members');
      while (tbodyMembers.children.length) {
        tbodyMembers.removeChild(tbodyMembers.children[0]);
      }
      for (let i = 0; i < members.length; i++) {
        const member = members[i];
        const trMember = tbodyTemplateMembers.children[0].cloneNode(true);
        tbodyMembers.appendChild(trMember);
        document.getElementsByName('member-name')[i].value = member.name;
        document.getElementsByName('member-age')[i].value = member.age;
        trMember.children[2].innerHTML = member.createdDate;
      }
      console.warn('읽기 완료');
    } else {
      const error = {
        status: xhr.status,
        statusText: xhr.status,
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
const update = function(event) {
  const memberUpdate = document.getElementsByName('member-update');
  let i = 0;
  for (; i < memberUpdate.length; i += 1) {
    if (event.srcElement === memberUpdate[i]) break;
  }
  const member = {
    name: document.getElementsByName('member-name')[i].value,
    age: document.getElementsByName('member-age')[i].value
  };
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      read();
      console.warn('수정 완료');
    } else {
      const error = {
        status: xhr.status,
        statusText: xhr.status,
        responseText: xhr.responseText
      }
      console.error(error);
    }
  };
  xhr.open('PUT', 'http://localhost:3100/api/v1/members');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify({
    key: i,
    member: member
  }));
}
```

## Delete
```js
const del = function(event) {
  const memberDelete = document.getElementsByName('member-delete');
  let i = 0;
  for (; i < memberDelete.length; i += 1) {
    if (event.srcElement === memberDelete[i]) break;
  }
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      read();
      console.warn('삭제 완료');
    } else {
      const error = {
        status: xhr.status,
        statusText: xhr.status,
        responseText: xhr.responseText
      }
      console.error(error);
    }
  };
  xhr.open('DELETE', 'http://localhost:3100/api/v1/members/' + i);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send();
}
```

## Finally
```js
read();
```

## 생각해 보기
* ❔ 브라우저에서 주소 치고 들어가는 것은 무조건 무슨 메소드 인가?
* ❔ 공통 부분 함수화 하기
* React 또는 Vue.js와 비교해 보기

## Axios
https://github.com/axios/axios
