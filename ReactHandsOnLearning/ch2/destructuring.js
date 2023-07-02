{
  const sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"],
  };

  let { bread, meat } = sandwich;

  console.log(bread, meat); // dutch crunch tuna

  bread = "garlic";
  meat = "turkey";

  console.log(bread, meat); // garlic turkey
  console.log(sandwich.bread, sandwich.meat); // dutch crunch tuna
}
{
  const lordify = (regularPerson) => {
    console.log(`${regularPerson.firstname} of Canterbury`);
  };

  const regularPerson = {
    firstname: "Bill",
    lastname: "Wilson",
  };

  lordify(regularPerson); // Bill of Canterbury
}
{
  const lordify = ({ firstname }) => {
    console.log(`${firstname} of canterbury`);
  };

  const regularPerson = {
    firstname: "Bill",
    lastname: "Wilson",
  };

  lordify(regularPerson); // Bill of Canterbury
}
{
  const [firstResort] = ["Horse", "Mouse", "Cat"];

  console.log(firstResort); // Horse
}
{
  const [, , thirdResort] = ["Horse", "Mouse", "Cat"];

  console.log(thirdResort); // Cat
}
