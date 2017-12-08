function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  let length = facts.length;
  let i = 0;
  let newArray = [];
  while(i < length) {
    newArray.push(`${facts[i]}!!!`);
    i++;
  }
  return newArray;
}

