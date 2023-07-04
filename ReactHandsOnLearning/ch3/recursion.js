{
  // 再帰によるカウントダウン
  const countdown = (value, fn) => {
    fn(value);
    return value > 0 ? countdown(value - 1, fn) : value;
  };

  countdown(10, (value) => console.log(value));
  // 10
  // 9
  // 8
  // 7
  // 6
  // 5
  // 4
  // 3
  // 2
  // 1
  // 0
}
{
  // 再帰によるカウントダウン（非同期）
  const countdown = (value, fn, delay = 1000) => {
    fn(value);
    return value > 0 ? setTimeout(() => countdown(value - 1, fn), delay) : value;
  };

  const log = (value) => console.log(value);
  countdown(10, log);
}
{
  // 再帰によるデータ構造の探索
  const dan = {
    type: "person",
    data: {
      gender: "male",
      info: {
        id: 22,
        fullname: {
          first: "Dan",
          last: "Deacon",
        },
      },
    },
  };

  const deepPick = (fields, object = {}) => {
    const [first, ...remaining] = fields.split(".");
    return remaining.length ? deepPick(remaining.join("."), object[first]) : object[first];
  };

  console.log(deepPick("type", dan)); // person
  console.log(deepPick("data.info.fullname.first", dan)); // Dan
}
