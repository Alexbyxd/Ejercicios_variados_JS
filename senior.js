const variable = (data) => {
  const res = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] > 55 && data[i][1] > 7) {
      res.push("Senior");
    } else {
      res.push("Open");
    }
  }
  return res;
};
const variable2 = (data) => {
  return data.map(([x,y])=>{
    return x>=55 && y>7 ? 'Senior' : 'Open'
  })
};

const x = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];

console.log(variable(x));
console.log(variable2(x));
