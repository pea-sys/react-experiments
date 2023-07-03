{
  var frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false,
  };
  // 純粋関数ではない
  // 理由；
  // ・引数を取らず戻り値も返却しないから
  // ・関数外で宣言された変数に変更を加えているから
  function selfEducate() {
    frederick.canRead = true;
    frederick.canWrite = true;
  }

  selfEducate();

  console.log(frederick);
}
{
  var frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false,
  };
  // 純粋関数ではない
  // 理由；
  // ・引数のオブジェクトに変更を加えているから
  const selfEducate = (person) => {
    person.canRead = true;
    person.canWrite = true;
    return person;
  };

  //
  // still impure, mutates the original object
  //

  console.log(selfEducate(frederick));
  console.log(frederick);
}
{
  var frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false,
  };
  // 純粋関数
  const selfEducate = (person) => ({
    ...person,
    canRead: true,
    canWrite: true,
  });

  //
  // Pure Function, takes an argument, returns an object,
  //    and causes zero side effects
  //

  console.log(selfEducate(frederick));
  console.log(frederick);
}
{
  // DOMを操作する関数（純粋関数ではない）
  function Header(text) {
    let h1 = document.createElement("h1");
    h1.innerText = text;
    document.body.appendChild(h1);
  }

  Header("Header() caused side effects");
}
