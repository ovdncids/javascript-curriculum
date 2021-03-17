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

const membersCreate = function(member) {
  members.push(member);
  membersSet();
  return members;
};

const membersRead = function() {
  const tagPre = document.getElementById('tag-pre');
  for (let index in members) {
    tagPre.innerHTML += members[index] + '\n';
  }
  return members;
};

const membersDelete = function(index) {
  members.splice(index, 1);
  membersSet();
  return members;
};

const membersUpdate = function(index, name) {
  members[index] = name;
  membersSet();
  return members;
};

const membersSet = function() {
  const membersSet = JSON.stringify(members);
  sessionStorage.setItem('members', membersSet);
};

const membersSubmit = function(form) {
  const nameTextObject = form['name-text'];
  try {
    const evalReturn = eval(nameTextObject.value);
    console.log(evalReturn);
  } catch(error) {
    console.error(error);
    alert(error);
    return false;
  }
}

membersRead();
