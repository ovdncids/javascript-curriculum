const membersGet = sessionStorage.getItem('members');
const membersLogical = membersGet || '[]';
const members = JSON.parse(membersLogical);

const membersCreate = function(member) {
  members.push(member);
  membersSet();
  return members;
};

const membersRead = function() {
  const preTag = document.getElementById('pre-tag');
  for (let index in members) {
    preTag.innerHTML += members[index] + '\n';
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
  const textNameObject = form['text-name'];
  try {
    const evalReturn = eval(textNameObject.value);
    console.log(evalReturn);
  } catch(error) {
    console.error(error);
    alert(error);
    return false;
  }
}

membersRead();
