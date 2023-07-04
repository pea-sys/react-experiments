{
  // 関数を引数に取る高階関数
  const invokeIf = (condition, fnTrue, fnFalse) => (condition ? fnTrue() : fnFalse());

  const showWelcome = () => console.log("Welcome!!!");

  const showUnauthorized = () => console.log("Unauthorized!!!");

  invokeIf(true, showWelcome, showUnauthorized); // "Welcome!!!"
  invokeIf(false, showWelcome, showUnauthorized); // "Unauthorized!!!"
}
