let users;

const ajax = function(method, url, data, callback) {
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function() {
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
      callback(xhrObject);
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open(method, url);
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send(JSON.stringify(data));
};

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
  ajax('POST', 'http://localhost:3100/api/v1/users', user, successFunction);
};

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
    console.log('Readed', users);
  };
  ajax('GET', 'http://localhost:3100/api/v1/users', undefined, successFunction);
};

const usersDelete = function(index) {
  const url = 'http://localhost:3100/api/v1/users/' + index;
  ajax('DELETE', url, undefined, usersRead);
};

const usersUpdate = function(index) {
  const url = 'http://localhost:3100/api/v1/users/' + index;
  const name = document.getElementsByName('users-name')[index].value;
  const age = document.getElementsByName('users-age')[index].value;
  const user = {
    name: name,
    age: age
  };
  ajax('PATCH', url, user, usersRead);
};

usersRead();
