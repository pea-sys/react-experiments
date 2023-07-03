{
  var log = function (message) {
    console.log(message);
  };

  log("In JavaScript functions are variables");
}

{
  const log = (message) => console.log(message);
  log("ES6 arrow function");
}
{
  const obj = {
    message: "They can be added to objects like variables",
    log(message) {
      console.log(message);
    },
  };

  obj.log(obj.message); // They can be added to objects like variables
}
{
  const messages = ["They can be inserted into arrays", (message) => console.log(message), "like variables", (message) => console.log(message)];

  messages[1](messages[0]); // They can be inserted into arrays
  messages[3](messages[2]); // like variables
}
{
  const insideFn = (logger) => logger("They can be sent to other functions as arguments");

  insideFn((message) => console.log(message)); // They can be sent to other functions as arguments
}
{
  const createScream = function (logger) {
    return function (message) {
      logger(message.toUpperCase() + "!!!");
    };
  };

  const scream = createScream((message) => console.log(message));

  scream("functions can be returned from other functions");
  scream("createScream returns a function");
  scream("scream invokes that returned function");
  // FUNCTIONS CAN BE RETURNED FROM OTHER FUNCTIONS!!!
  // CREATESCREAM RETURNS A FUNCTION!!!
  // SCREAM INVOKES THAT RETURNED FUNCTION!!!
}
{
  const createScream = (logger) => (message) => logger(message.toUpperCase() + "!!!");

  const scream = createScream((message) => console.log(message));

  scream("ES6 can createScream with less");
}
