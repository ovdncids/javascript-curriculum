const url = new URL(window.location.href);
const queryString = url.searchParams;
const inputText  = queryString.get('input-text');
const inputHiddens = queryString.getAll('input-hidden');
const inputHidden = inputHiddens[0];

const inputTextObject = document.getElementsByName('input-text')[0];
inputTextObject.value = inputText;
inputTextObject.focus();

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

const membersUpdate = function(index, member) {
  members[index] = member;
  membersSet();
  return members;
};

const membersSet = function() {
  const membersSet = JSON.stringify(members);
  sessionStorage.setItem('members', membersSet);
};

const membersSubmit = function(form) {
  const inputTextObject = form['input-text'];
  try {
    const evalReturn = eval(inputTextObject.value);
    console.log(evalReturn);
  } catch(error) {
    console.error(error);
    alert(error);
    return false;
  }
}

membersRead();
