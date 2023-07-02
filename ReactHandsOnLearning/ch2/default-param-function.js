function logActivity1(name = "Shane McConkey", activity = "skiing") {
  console.log(`${name} loves ${activity}`);
}

logActivity1();

var defaultPerson = {
  name: {
    first: "Shane",
    last: "McConkey",
  },
  favActivity: "skiing",
};

function logActivity2(person = defaultPerson) {
  console.log(`${person.name.first} loves ${person.favActivity}`);
}
logActivity2();
