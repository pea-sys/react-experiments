var topic = "JavaScript";

if (topic) {
  var topic = "React";
  console.log("block", topic);
}

console.log("global", topic);

var topic = "JavaScript";

if (topic) {
  let topic = "React";
  console.log("block", topic);
}

console.log("global", topic);
