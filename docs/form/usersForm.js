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

const usersCreate = function(user) {
  users.push(user);
  usersSet();
  return 'Created';
};

const usersRead = function() {
  const tagPre = document.getElementById('tag-pre');
  for (let index in users) {
    tagPre.innerHTML += users[index] + '\n';
  }
  return users;
};

const usersDelete = function(index) {
  users.splice(index, 1);
  usersSet();
  return 'Deleted';
};

const usersUpdate = function(index, user) {
  users[index] = user;
  usersSet();
  return 'Updated';
};

const usersSet = function() {
  const usersSet = JSON.stringify(users);
  sessionStorage.setItem('users', usersSet);
};

const usersSubmit = function(event, form) {
  const inputTextObject = form['input-text'];
  try {
    const evalReturn = eval(inputTextObject.value);
    console.log(evalReturn);
  } catch(error) {
    console.error(error);
    alert(error);
    event.preventDefault();
  }
}

usersRead();
