const fetch = require("isomorphic-fetch");
fetch("https://api.github.com/users/pea-sys")
  .then((res) => res.json())
  .then(console.log);
