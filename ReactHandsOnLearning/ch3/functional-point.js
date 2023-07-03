{
  // オブジェクトに変更を加える
  let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0,
  };
  // 元のオブジェクトを変更してしまう
  function rateColor(color, rating) {
    color.rating = rating;
    return color;
  }

  console.log(rateColor(color_lawn, 5).rating);
  console.log(color_lawn.rating);
}
{
  // オブジェクトに変更を加える
  let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0,
  };
  // オブジェクトのコピーを作成してから変更を加える（イミュータブルなアプローチ）
  function rateColor(color, rating) {
    return Object.assign({}, color, { rating: rating }); // Object.assignを使ってコピーを作成
  }

  console.log(rateColor(color_lawn, 5).rating);
  console.log(color_lawn.rating);
}
{
  // オブジェクトに変更を加える
  let color_lawn = {
    title: "lawn",
    color: "#00FF00",
    rating: 0,
  };
  // オブジェクトのコピーを作成してから変更を加える（イミュータブルなアプローチ）
  const rateColor = (color, rating) => ({
    ...color, // スプレッド構文を使ってコピーを作成
    rating,
  });

  console.log(rateColor(color_lawn, 5).rating);
  console.log(color_lawn.rating);
}
{
  // 配列に変更を加える
  let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];
  // 元の配列を変更してしまう
  function addColor(title, colors) {
    colors.push({ title: title });
    return colors;
  }

  console.log(addColor("Glam Green", list).length);
  console.log(list.length);
}
{
  // 配列に変更を加える
  let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];
  // 配列のコピーを作成してから変更を加える（イミュータブルなアプローチ）
  const addColor = (title, array) => array.concat({ title }); // Array.concatを使ってコピーを作成

  console.log(addColor("Glam Green", list).length);
  console.log(list.length);
}
{
  // 配列に変更を加える
  let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];
  // 配列のコピーを作成してから変更を加える（イミュータブルなアプローチ）
  const addColor = (title, list) => [
    ...list, // スプレッド構文を使ってコピーを作成
    { title },
  ];

  console.log(addColor("Glam Green", list).length);
  console.log(list.length);
}
