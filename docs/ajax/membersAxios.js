const membersCreate = function(form) {
  const memberNameObject = form['member-name'];
  const memberAgeObject = form['member-age'];
  const member = {
    name: memberNameObject.value,
    age: memberAgeObject.value
  };
  const successFunction = function() {
    memberNameObject.value = '';
    memberAgeObject.value = '';
    membersRead();
  }
  axios.post('http://localhost:3100/api/v1/members', member).then(successFunction);
};

const membersRead = function() {
  axios.get('http://localhost:3100/api/v1/members').then(function(response) {
    const data = response.data;
    const members = data.members;
    const tagDivParent = document.getElementById('tag-div-parent');
    const tagDivChild = document.getElementById('tag-div-child');
    tagDivParent.innerHTML = '';
    for (let index in members) {
      const newDivChild = tagDivChild.cloneNode(true);
      tagDivParent.appendChild(newDivChild);
      const membersNameObject = document.getElementsByName('members-name')[index];
      const membersAgeObject = document.getElementsByName('members-age')[index];
      const membersUpdateObject = document.getElementsByName('members-update')[index];
      const membersDeleteObject = document.getElementsByName('members-delete')[index];
      membersNameObject.value = members[index].name;
      membersAgeObject.value = members[index].age;
      membersUpdateObject.index = index;
      membersDeleteObject.index = index;
    }
    console.log('Readed', members);
  });
};

const membersDelete = function(index) {
  const url = 'http://localhost:3100/api/v1/members/' + index;
  axios.delete(url).then(membersRead);
};

const membersUpdate = function(index) {
  const name = document.getElementsByName('members-name')[index].value;
  const age = document.getElementsByName('members-age')[index].value;
  const memberUpdate = {
    index: index,
    member: {
      name: name,
      age: age
    }
  };
  axios.patch('http://localhost:3100/api/v1/members', memberUpdate).then(membersRead);
};

membersRead();
