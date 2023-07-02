{
  let lordify = function (firstname) {
    return `${firstname} of 1`;
  };

  console.log(lordify("Dale"));
  console.log(lordify("Daryle"));
}
{
  let lordify = (firstname) => `${firstname} of 2`;

  console.log(lordify("Dana"));
  console.log(lordify("Daphne"));
}
{
  let lordify = function (firstName, land) {
    return `${firstName} of ${land}`;
  };

  console.log(lordify("Dale", "Maryland"));
  console.log(lordify("Daryle", "Culpeper"));
}
{
  let lordify = (firstName, land) => {
    if (!firstName) {
      throw new Error("A firstName is required to lordify");
    }

    if (!land) {
      throw new Error("A lord must have a land");
    }

    return `${firstName} of ${land}`;
  };

  console.log(lordify("Kelly", "Sonoma"));
}
{
  var tahoe = {
    mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    print: function (delay = 1000) {
      setTimeout(
        function () {
          console.log(this.mountains.join(","));
        }.bind(this),
        delay
      );
    },
  };

  tahoe.print();
}
{
  var tahoe = {
    mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
    print: function (delay = 1000) {
      setTimeout(() => {
        console.log(this);
      }, delay);
    },
  };

  tahoe.print();
}
