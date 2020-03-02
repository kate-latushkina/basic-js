module.exports = function createDreamTeam(members) {
  if (members == null || members == undefined || members == Number || !Array.isArray(members)) {
    return false;
  }
  else {
    let teamArr = [];
    let result;
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        teamArr.push(members[i].toUpperCase().trim().slice(0, 1));
        teamArr.sort();
        result = teamArr.join('');
      }

    }
    return result;
  }
};