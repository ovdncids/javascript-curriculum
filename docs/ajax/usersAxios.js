let users;

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
  axios.post('http://localhost:3100/api/v1/users', user).then(successFunction);
};

const usersRead = function() {
  axios.get('http://localhost:3100/api/v1/users').then(function(response) {
    const data = response.data;
    users = data.users;
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
  });
};

const usersDelete = function(index) {
  const url = 'http://localhost:3100/api/v1/users/' + index;
  axios.delete(url).then(usersRead);
};

const usersUpdate = function(index) {
  const url = 'http://localhost:3100/api/v1/users/' + index;
  const name = document.getElementsByName('users-name')[index].value;
  const age = document.getElementsByName('users-age')[index].value;
  const user = {
    name: name,
    age: age
  };
  axios.patch(url, user).then(usersRead);
};

usersRead();
