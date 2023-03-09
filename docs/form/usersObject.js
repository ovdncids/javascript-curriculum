const usersGet = sessionStorage.getItem('users');
const usersLogical = usersGet || '[]';
const users = JSON.parse(usersLogical);

const usersCreate = function(form) {
  const userNameObject = form['user-name'];
  const userAgeObject = form['user-age'];
  users.push({
    name: userNameObject.value,
    age: userAgeObject.value
  });
  userNameObject.value = '';
  userAgeObject.value = '';
  usersSet();
  return usersRead();
};

const usersRead = function() {
  const tagDivParent = document.getElementById('tag-div-parent');
  const tagDivChild = document.getElementById('tag-div-child');
  tagDivParent.innerHTML = '';
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
  return users;
};

const usersDelete = function(index) {
  users.splice(index, 1);
  usersSet();
  return usersRead();
};

const usersUpdate = function(index) {
  const name = document.getElementsByName('users-name')[index].value;
  const age = document.getElementsByName('users-age')[index].value;
  users[index] = {
    name: name,
    age: age
  };
  usersSet();
  return usersRead();
};

const usersSet = function() {
  const usersSet = JSON.stringify(users);
  sessionStorage.setItem('users', usersSet);
};

usersRead();
