function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
}

Vacation.prototype.print = function () {
  console.log(this.destination + " will take " + this.length + " days");
};

var maui = new Vacation("Maui", 7);

maui.print();
