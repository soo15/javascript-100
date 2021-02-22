//문제10 : 별 찍기

const level = 5;

for (let i = 1; i <= level; i++) {
  let tree = "";
  for (let k = 1; k <= level - i; k++) {
    //공백증가포문
    tree += " ";
  }
  for (let j = 1; j <= i * 2 - 1; j++) {
    //별증가포문
    tree += "*";
  }
  console.log(tree);
}

// 정사각형 별찍기
// for(let i = 0; i < 5; i++)  {
//   for(let j = 0; j < 5; j++)  {
//     document.write('*');
//   }
//   document.write('<br>');
// }

// 삼각형 별찍기
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     document.write('*')
//   }
//   document.write('<br>');
// }

// for(let i = 0; i < 5; i++)  {
//   for(let j = 4; j > i; j--)  {
//     document.write('&nbsp');
//   }
//   for(let j = 0; j <= i; j++) {
//     document.write('*');
//   }
//   document.write('<br>');
// }

//거꾸로 삼각형 별찍기
// for (let i = 0; i < 5; i++) {
//   for (let j = 5; j > i; j--) {
//     document.write('*');
//   }
//   document.write('<br>');
// }

// for(let i = 0; i < 5; i++)  {
//   for(let j=0; j <= i; j++)  {
//     // space
//     document.write('&nbsp');
//   }
//   for(let j=5; j > i; j--)  {
//     document.write('*');
//   }
//   document.write('<br>');
// }

// 정삼각형 별찍기
// for(let i = 0; i < 5; i++)  {
//   for(let j=4; j > i; j--)  {
//     // space
//     document.write('&nbsp');
//   }
//   for(let j=0; j <= i; j++)  {
//     document.write('*');
//   }
//   for(let j=1; j <= i; j++)  {
//     document.write('*');
//   }
//   document.write('<br>');
// }

// 거꾸로 정삼각형 별찍기
// for(let i = 0; i < 5; i++)  {
//   for(let j=0; j < i; j++)  {
//     document.write('&nbsp');
//   }
//   for(let j=5; j > i; j--)  {
//     // space
//     document.write('*');
//   }
//   for(let j=4; j > i; j--)  {
//     document.write('*');
//   }
//   document.write('<br>');
// }

// 다이아몬드 별찍기
// for(let i = 0; i < 5; i++)  {
//   for(let j = 4; j > i; j--)  {
//     document.write('&nbsp');
//   }
//   for(let j = 0; j <= i; j++)  {
//     document.write('*');
//   }
//   for(let j = 1; j <= i; j++)  {
//     document.write('*');
//   }

//   document.write('<br>');
// }

// for(let i = 0; i < 4; i++)  {
//   for(let j = 0; j <= i; j++)  {
//     document.write('&nbsp');
//   }
//   for(let j = 4; j > i; j--)  {
//     document.write('*');
//   }
//   for(let j = 3; j > i; j--)  {
//     document.write('*');
//   }
//   document.write('<br>');
// }
