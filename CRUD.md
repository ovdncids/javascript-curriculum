# CRUD (Create, Read, Update, Delete)

## Markup
member.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>CRUD</title>
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="member.css">
    <script src="member.js"></script>
  </head>
  <body>
    <h1>CRUD</h1>
    <div>
      <h4>Read</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Created Date</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody id="tbodyMember">
          <tr class="d-none">
            <td><input type="text" placeholder="Name" name="member.name" /></td>
            <td><input type="text" placeholder="Age" name="member.age" /></td>
            <td></td>
            <td>
              <button class="pointer" name="update.member" onclick="update(event)">
                <span class="d-none"><i class="fa fa-circle-o-notch fa-spin fa-fw margin-bottom"></i></span> Update
              </button>
              <button class="pointer" name="delete.member" onclick="del(event)">
                <span class="d-none"><i class="fa fa-circle-o-notch fa-spin fa-fw margin-bottom"></i></span> Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="d-block" />
    <div>
      <h2>Create</h2>
      <input type="text" placeholder="Name" id="member.name" />
      <input type="text" placeholder="Age" id="member.age" />
      <button class="pointer" onclick="create(event)">
        <span class="d-none"><i class="fa fa-circle-o-notch fa-spin fa-fw margin-bottom"></i></span> Create
      </button>
    </div>
  </body>
</html>

```

member.css
```css
.d-none {
  display: none;
}

.pointer {
  cursor: pointer;
}

```

member.js
```js
function create(event) {
  console.log(event);
}

function read() {
}

function update(event) {
  console.log(event);
}

function del(event) {
  console.log(event);
}

```

## Create

### Validation with toastr
https://github.com/CodeSeven/toastr
```html
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css">
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
```
```js
function create(event) {
  var member = {
    name: document.getElementById('member.name').value,
    age: document.getElementById('member.age').value
  };
  if (!member.name) {
    toastr.warning('Please text your name.');
    return;
  }
  if (!Number(member.age) || Number(member.age) <= 0) {
    toastr.warning('Please text your age and upper than 0.');
    return;
  }
}
```

## Create
```js
function create(event) {
  ...
  var spanSpin = event.srcElement.children[0];
  spanSpin.className = '';
  // Ajax 원형
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3100/api/v1/members');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(JSON.stringify(member));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      spanSpin.className = 'd-none';
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        read();
      } else {
        console.error('Error!');
      }
    }
  };
}
```

## Read

### nprogress, moment.js
https://github.com/rstacruz/nprogress

https://momentjs.com/
```html
<link rel="stylesheet" type="text/css" href="http://ricostacruz.com/nprogress/nprogress.css">
<script src="http://ricostacruz.com/nprogress/nprogress.js"></script>
<script src="https://momentjs.com/downloads/moment.min.js"></script>
```
```js
function read() {
  NProgress.start();
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3100/api/v1/members');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      NProgress.done();
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        var tbodyMember = document.getElementById('tbodyMember');
        while (tbodyMember.children.length > 1) {
          tbodyMember.removeChild(tbodyMember.children[0]);
        }
        var trTemplateMember = tbodyMember.children[0];
        var members = JSON.parse(xhr.responseText).members;
        for (var i = 0; i < members.length; i += 1) {
          var member = members[i];
          var trMember = tbodyMember.children[tbodyMember.children.length - 1].cloneNode(true);
          tbodyMember.insertBefore(trMember, trTemplateMember);
          document.getElementsByName('member.name')[i].value = member.name;
          document.getElementsByName('member.age')[i].value = member.age;
          trMember.children[2].innerHTML = moment(member.createdDate).format('YYYY-MM-DD HH:mm');
          trMember.className = '';
        }
      } else {
        console.error('Error!');
      }
    }
  };
}
```

## Update
```js
function update(event) {
  console.log(event);
  for (var i = 0; i < document.getElementsByName('update.member').length; i += 1) {
    if (event.srcElement === document.getElementsByName('update.member')[i]) {
      var member = {
        name: document.getElementsByName('member.name')[i].value,
        age: document.getElementsByName('member.age')[i].value
      };
      if (!member.name) {
        toastr.warning('Please text your name.');
        return;
      }
      if (!Number(member.age) || Number(member.age) <= 0) {
        toastr.warning('Please text your age and upper than 0.');
        return;
      }
      var spanSpin = event.srcElement.children[0];
      spanSpin.className = '';
      var xhr = new XMLHttpRequest();
      xhr.open('PUT', 'http://localhost:3100/api/v1/members');
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(JSON.stringify({
        key: i,
        member: member
      }));
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          spanSpin.className = 'd-none';
          if (xhr.status === 200) {
            console.log(xhr.responseText);
            read();
          } else {
            console.error('Error!');
          }
        }
      };
    }
  }
}
```

## Delete
```js
function del(event) {
  console.log(event);
  for (var i = 0; i < document.getElementsByName('delete.member').length; i += 1) {
    if (event.srcElement === document.getElementsByName('delete.member')[i]) {
      if (!window.confirm('Are you sure?')) {
        return;
      }
      var spanSpin = event.srcElement.children[0];
      spanSpin.className = '';
      var xhr = new XMLHttpRequest();
      xhr.open('DELETE', 'http://localhost:3100/api/v1/members/' + i);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          spanSpin.className = 'd-none';
          if (xhr.status === 200) {
            console.log(xhr.responseText);
            read();
          } else {
            console.error('Error!');
          }
        }
      };
    }
  }
}
```

## React 또는 Vue.js와 비교해 보기

### Axios
https://github.com/axios/axios

## 생각해 보기
validate 부분 함수로 만들기
