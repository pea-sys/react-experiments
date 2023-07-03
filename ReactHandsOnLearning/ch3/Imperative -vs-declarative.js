{
  var string = "Restaurants in Hanalei";
  var urlFriendly = "";

  for (var i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      urlFriendly += "-";
    } else {
      urlFriendly += string[i];
    }
  }

  console.log(urlFriendly);
}
{
  const string = "Restaurants in Hanalei";
  const urlFriendly = string.replace(/ /g, "-");

  console.log(urlFriendly);
}
