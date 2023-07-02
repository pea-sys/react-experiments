{
  var name = "Tallac";
  var elevation = 9738;

  var funHike = { name, elevation };

  console.log(funHike); // {name: "Tallac", elevation: 9738}
}
{
  var name = "Tallac";
  var elevation = 9738;
  var print = function () {
    console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
  };

  var funHike = { name, elevation, print };

  funHike.print(); // Mt. Tallac is 9738 feet tall
}
{
  var name = "Léo Taillefer";
  var sound = "Kahh";

  var skier = {
    name: name,
    sound: sound,
    powderYell: function () {
      var yell = this.sound.toUpperCase();
      console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed: function (mph) {
      this.speed = mph;
      console.log("speed:", mph);
    },
  };

  skier.powderYell();
  skier.speed(350);
  console.log(JSON.stringify(skier));
}
{
  const name = "Léo Taillefer";
  const sound = "Kahh";

  const skier = {
    name,
    sound,
    powderYell() {
      let yell = this.sound.toUpperCase();
      console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed(mph) {
      this.speed = mph;
      console.log("speed:", mph);
    },
  };

  skier.powderYell();
  skier.speed(350);
  console.log(JSON.stringify(skier));
}
