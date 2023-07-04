{
  // メソッドの連鎖
  const template = "hh:mm:ss tt";
  const clockTime = template.replace("hh", "03").replace("mm", "33").replace("ss", "33").replace("tt", "PM");

  console.log(clockTime); // "03:33:33 PM"
}
{
  // 関数の合成（命令型プログラミング的アプローチ）
  const createClockTime = (date) => ({ date });

  const appendAMPM = ({ date }) => ({
    date,
    ampm: date.getHours() >= 12 ? "PM" : "AM",
  });

  const civilianHours = (clockTime) => {
    const hours = clockTime.date.getHours();
    return {
      ...clockTime,
      hours: hours > 12 ? hours - 12 : hours,
    };
  };

  const removeDate = (clockTime) => {
    let newTime = { ...clockTime };
    delete newTime.date;
    return newTime;
  };

  // ネストした関数の呼び出し（読みにくい）

  const oneFunction = (date) => removeDate(civilianHours(appendAMPM(createClockTime(date))));

  console.log(oneFunction(new Date()));
}
{
  // 関数の合成（関数型プログラミング的アプローチ）
  const createClockTime = (date) => ({ date });

  const appendAMPM = ({ date }) => ({
    date,
    ampm: date.getHours() >= 12 ? "PM" : "AM",
  });

  const civilianHours = (clockTime) => {
    const hours = clockTime.date.getHours();
    return {
      ...clockTime,
      hours: hours > 12 ? hours - 12 : hours,
    };
  };

  const removeDate = (clockTime) => {
    let newTime = { ...clockTime };
    delete newTime.date;
    return newTime;
  };

  // 高階関数を使った関数の合成

  const compose =
    (...fns) =>
    (arg) =>
      fns.reduce((composed, f) => f(composed), arg);

  const oneFunction = compose(createClockTime, appendAMPM, civilianHours, removeDate);

  console.log(oneFunction(new Date()));
}
