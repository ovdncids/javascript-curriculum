const queryString = new URLSearchParams(window.location.search);
const inputText  = queryString.get('input-text');
const inputHiddens = queryString.getAll('input-hidden');
const inputHidden = inputHiddens[0];

const inputTextObject = document.getElementsByName('input-text')[0];
inputTextObject.value = inputText;
inputTextObject.focus();

const usersGet = sessionStorage.getItem('users');
const usersLogical = usersGet || '[]';
const users = JSON.parse(usersLogical);

const usersCreate = function(form) {
  const inputTextObject = form['input-text'];
  users.push(inputTextObject.value);
  inputTextObject.value = '';
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
    const usersUpdateObject = document.getElementsByName('users-update')[index];
    const usersDeleteObject = document.getElementsByName('users-delete')[index];
    usersNameObject.value = users[index];
    usersUpdateObject.index = index;
    usersDeleteObject.index = index;
  }
  console.log('Readed', users);
  return users;
};

const usersDelete = function(index) {
  users.splice(index, 1);
  usersSet();
  return usersRead();
};

const usersUpdate = function(index) {
  const name = document.getElementsByName('users-name')[index].value;
  users[index] = name;
  usersSet();
  return usersRead();
};

const usersSet = function() {
  const usersSet = JSON.stringify(users);
  sessionStorage.setItem('users', usersSet);
};

usersRead();
