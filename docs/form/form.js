const membersGet = sessionStorage.getItem('members');
const membersLogical = membersGet || '[]';
const members = JSON.parse(membersLogical);

const membersCreate = function(member) {
  members.push(member);
  membersSet();
  const read = membersRead();
  return read;
};

const membersRead = function() {
  // window.location.reload();
  return members;
};

const membersDelete = function(index) {
  members.splice(index, 1);
  membersSet();
  const read = membersRead();
  return read;
};

const membersUpdate = function(index, name) {
  members[index] = name;
  membersSet();
  const read = membersRead();
  return read;
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

for (let index in members) {
  document.write(members[index] + ' ');
}
