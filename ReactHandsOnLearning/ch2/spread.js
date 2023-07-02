{
  const peaks = ["Tallac", "Ralston", "Rose"];
  const canyons = ["Ward", "Blackwood"];
  const tahoe = [...peaks, ...canyons];

  console.log(tahoe.join(", ")); // Tallac, Ralston, Rose, Ward, Blackwood
}
{
  const peaks = ["Tallac", "Ralston", "Rose"];
  const [last] = peaks.reverse(); // 配列の内容を書き換えてしまっている

  console.log(last); // Rose
  console.log(peaks.join(", ")); // Rose, Ralston, Tallac
}
{
  const peaks = ["Tallac", "Ralston", "Rose"];
  const [last] = [...peaks].reverse(); // スプレッド構文により配列のコピーを生成してからreverseを呼び出している

  console.log(last); // Rose
  console.log(peaks.join(", ")); // Tallac, Ralston, Rose
}
{
  const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];

  const [first, ...rest] = lakes;

  console.log(rest.join(", ")); // Marlette, Fallen Leaf, Cascade
}
{
  function directions(...args) {
    const [start, ...remaining] = args;
    const [finish, ...stops] = remaining.reverse();

    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
  }

  directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");
  // drive through 5 towns
  // start in Truckee
  // the destination is Tahoma
  // stopping 3 times in between
}
{
  const morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly",
  };

  const dinner = "mac and cheese";

  const backpackingMeals = {
    ...morning,
    dinner,
  };

  console.log(backpackingMeals);
  // {
  //   breakfast: "oatmeal",
  //   lunch: "peanut butter and jelly",
  //   dinner: "mac and cheese"
  // }
}
