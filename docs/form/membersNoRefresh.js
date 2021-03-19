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
  const tagDivParent = document.getElementById('tag-div-parent');
  const tagDivChild = document.getElementById('tag-div-child');
  tagDivParent.innerHTML = '';
  for (let index in members) {
    const newDivChild = tagDivChild.cloneNode(true);
    tagDivParent.appendChild(newDivChild);
    const membersNameObject = document.getElementsByName('members-name')[index];
    const membersUpdateObject = document.getElementsByName('members-update')[index];
    const membersDeleteObject = document.getElementsByName('members-delete')[index];
    membersNameObject.value = members[index];
    membersUpdateObject.index = index;
    membersDeleteObject.index = index;
  }
  console.log('Readed', members);
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
