{
  const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
  // 配列をコンマ区切りの文字列に変換する
  console.log(schools.join(", ")); // "Yorktown, Washington & Liberty, Wakefield"
}
{
  // Array.filterによるデータ変換
  const schools = ["Yorktown", "Washington & Lee", "Wakefield"];
  // 配列のサブセットを取得する
  const wSchools = schools.filter((school) => school[0] === "W");

  console.log(wSchools); // ["Washington & Liberty", "Wakefield"]
}
{
  // Array.filterによるデータ変換
  const schools = ["Yorktown", "Washington & Lee", "Wakefield"];
  // 配列から要素を削除する
  const cutSchool = (cut, list) => list.filter((school) => school !== cut);

  console.log(cutSchool("Washington & Lee", schools).join(", ")); // "Yorktown, Wakefield"
  console.log(schools.join("\n"));
  // Yorktown
  // Washington & Liberty
  // Wakefield
}
{
  // Array.mapによるデータ変換
  const schools = ["Yorktown", "Washington & Lee", "Wakefield"];
  // 配列から内容の異なる同じサイズの配列を取得する
  const highSchools = schools.map((school) => `${school} High School`);

  console.log(highSchools.join("\n"));
  // Yorktown High School
  // Washington & Liberty High School
  // Wakefield High School

  console.log(schools.join("\n"));
  // Yorktown
  // Washington & Liberty
  // Wakefield
}
{
  // Array.mapによるデータ変換
  const schools = ["Yorktown", "Washington & Lee", "Wakefield"];
  // 文字列の配列をオブジェクトの配列に変換する
  const highSchools = schools.map((school) => ({ name: school }));

  console.log(highSchools);
  // [
  //   { name: "Yorktown" },
  //   { name: "Washington & Liberty" },
  //   { name: "Wakefield" }
  // ]
}
{
  // Array.mapによるデータ変換
  let schools = [{ name: "Yorktown" }, { name: "Stratford" }, { name: "Washington & Lee" }, { name: "Wakefield" }];
  // 配列の特定の要素のみを変更する
  const editName = (oldName, name, arr) =>
    arr.map((item) => {
      if (item.name === oldName) {
        return {
          ...item,
          name,
        };
      } else {
        return item;
      }
    });

  let updatedSchools = editName("Stratford", "HB Woodlawn", schools);

  console.log(updatedSchools[1]); // { name: "HB Woodlawn" }
  console.log(schools[1]); // { name: "Stratford" }
}
{
  // Array.mapによるデータ変換
  let schools = [{ name: "Yorktown" }, { name: "Stratford" }, { name: "Washington & Lee" }, { name: "Wakefield" }];
  // 配列の特定の要素のみを変更する（3項演算子で書き換えたもの）
  const editName = (oldName, name, arr) => arr.map((item) => (item.name === oldName ? { ...item, name } : item));

  let updatedSchools = editName("Stratford", "HB Woodlawn", schools);

  console.log(updatedSchools[1]); // { name: "HB Woodlawn" }
  console.log(schools[1]); // { name: "Stratford" }
}
{
  // Array.mapによるデータ変換
  const schools = {
    Yorktown: 10,
    "Washington & Lee": 2,
    Wakefield: 5,
  };
  // オブジェクトを配列に変換する
  const schoolArray = Object.keys(schools).map((key) => ({
    name: key,
    wins: schools[key],
  }));

  console.log(schoolArray);
  // [
  //   {
  //     name: "Yorktown",
  //     wins: 10
  //   },
  //   {
  //     name: "Washington & Liberty",
  //     wins: 2
  //   },
  //   {
  //     name: "Wakefield",
  //     wins: 5
  //   }
  // ]
}
{
  // Array.reduceによるデータ変換
  const ages = [21, 18, 42, 40, 64, 63, 34];
  // 配列の中から一番大きな数値を見つける
  const maxAge = ages.reduce((max, age) => {
    console.log(`${age} > ${max} = ${age > max}`);
    if (age > max) {
      return age;
    } else {
      return max;
    }
  }, 0);

  console.log("maxAge", maxAge);
  // 21 > 0 = true
  // 18 > 21 = false
  // 42 > 21 = true
  // 40 > 42 = false
  // 64 > 42 = true
  // 63 > 64 = false
  // 34 > 64 = false
  // maxAge 64
}
{
  // Array.reduceによるデータ変換
  const ages = [21, 18, 42, 40, 64, 63, 34];
  // 配列の中から一番大きな数値を見つける（3項演算子で書き換えたもの）
  const max = ages.reduce((max, value) => (value > max ? value : max), 0);

  console.log("maxAge", max); // maxAge 64
}
{
  // Array.reduceによるデータ変換
  const colors = [
    {
      id: "xekare",
      title: "rad red",
      rating: 3,
    },
    {
      id: "jbwsof",
      title: "big blue",
      rating: 2,
    },
    {
      id: "prigbj",
      title: "grizzly grey",
      rating: 5,
    },
    {
      id: "ryhbhsl",
      title: "banana",
      rating: 1,
    },
  ];
  // 配列をオブジェクトに変換する
  const hashColors = colors.reduce((hash, { id, title, rating }) => {
    hash[id] = { title, rating };
    return hash;
  }, {});

  console.log(hashColors);
  // {
  //   xekare: {
  //     title:"rad red",
  //     rating:3
  //   },
  //   jbwsof: {
  //     title:"big blue",
  //     rating:2
  //   },
  //   prigbj: {
  //     title:"grizzly grey",
  //     rating:5
  //   },
  //   ryhbhsl: {
  //     title:"banana",
  //     rating:1
  //   }
  // }
}
{
  // Array.reduceによるデータ変換
  const colors = ["red", "red", "green", "blue", "green"];
  // 配列からユニーク値のみによる配列を取得する
  const distinctColors = colors.reduce((distinct, color) => (distinct.indexOf(color) !== -1 ? distinct : [...distinct, color]), []);

  console.log(distinctColors); // ["red", "green", "blue"]
}
