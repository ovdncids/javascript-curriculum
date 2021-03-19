const url = new URL(window.location.href);
const queryString = url.searchParams;
const nameText  = queryString.get('name-text');
const nameHiddens = queryString.getAll('name-hidden');
const nameHidden = nameHiddens[0];

const nameTextObject = document.getElementsByName('name-text')[0];
nameTextObject.value = nameText;
nameTextObject.focus();

const membersGet = sessionStorage.getItem('members');
const membersLogical = membersGet || '[]';
const members = JSON.parse(membersLogical);

const membersCreate = function(form) {
  const nameTextObject = form['name-text'];
  members.push(nameTextObject.value);
  nameTextObject.value = '';
  membersSet();
  return membersRead();
};

const membersRead = function() {
  const tagPre = document.getElementById('tag-pre');
  tagPre.innerHTML = '';
  for (let index in members) {
    tagPre.innerHTML += '<input type="text" name="members-name" value="' + members[index] + '">';
    tagPre.innerHTML += '<button onClick="membersUpdate(' + index + ')">Update</button>';
    tagPre.innerHTML += '<button onClick="membersDelete(' + index + ')">Delete</button>';
    tagPre.innerHTML += '\n';
  }
  return members;
};

const membersDelete = function(index) {
  members.splice(index, 1);
  membersSet();
  return membersRead();
};

const membersUpdate = function(index) {
  const name = document.getElementsByName('members-name')[index].value;
  members[index] = name;
  membersSet();
  return membersRead();
};

const membersSet = function() {
  const membersSet = JSON.stringify(members);
  sessionStorage.setItem('members', membersSet);
};

membersRead();
