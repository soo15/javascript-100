//* 약수구하기
//12 % n == 0 이 되면 n은 12의 약수
//12를 2부터 11사이의 숫자들로 나눠본 후 0이 되는 숫자를 찾으면 된다는 거다!

    // function divisors(integer) {
    //     let arr = [];
    //     for(let i=2; i<integer; i++) {
    //         if(integer % i == 0) {
    //         arr.push(i);
    //         }
    //     }
    //     if(! arr[0]) {
    //          return integer + ' is prime'
    //     } else {
    //         return arr
    //     }
    // }
    // console.log(divisors(12));
    // console.log(divisors(13));
    


    //*최소값 구하기


    // function findShort(s){
    //     let wordArr = s.split(' ');
    //     let min = wordArr[0].length;
    //     console.log(min);
        
    //     for(let word of wordArr){
    //         if(word.length < min){
    //             min = word.length
    //         }
    //     }
    //     return min
    // }


    // function findShort(s){
    //     let wordArr = s.split(' ');
    //     let arr = [];
    //     for(let word of wordArr){
    //         arr.push(word.length);
    //         console.log(arr);
    //     }

    //     arr.sort((l,r) => {
    //         return l-r;
    //     })

    //     return arr[0];
    // }

    // console.log(findShort('bitcoin take over the world maybe who knows perhaps'))


    //특정문자 치완하고 고치기


    // function songDecoder(song){
    //     let arr = song.split('WUB')
    //     let songName = ''
    //           for (let word of arr) {
    //         if (word !== '') {
    //            songName += word+' '
    //         }
    //     }
    //     return songName.trim()
    //     }
        

    // console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));


    //#으로 치환하기


    // function maskify(cc) {
    //     var len = cc.length
    //     if (len <= 4) {
    //         return cc
    //     } else {
    //         var piece = cc.slice(len-4, len)
    //         var newSt = '';
    //         for(var i=0; i<len-4; i++) {
    //             newSt += '#'
    //         }
    //         return newSt += piece
    //     }
    // }


    // console.log(maskify('4556364607935616'));


    //완벽한 제곱근 구하기(square Number)
    
    //Math.sqrt(x)라는 내장함수 제곱근을 구할 수 있다!
    // function findNextSquare(sq) {
    //    var sqN = Math.sqrt(sq)
    // }

    // function findNextSquare(sq) {
    //     let sqN = Math.sqrt(sq)
    //     if(sqN - parseInt(sqN) !== 0) {
    //     return -1
    //     } else {
    //     return (sqN+1)*(sqN+1)
    //     }
    //  }

    // console.log(findNextSquare(121));


//삼각형인가?
// function isTriagle(a,b,c){
//     let arr = [a, b, c]
//     let max = arr[0]
//     let sum = 0;
//     for(let i in arr){
//         console.log(i);
//         if(arr[i] > max){
//             max = arr[i]
//         }else{
//             sum += arr[i]
//         }
//     }

//     if(max < sum) return true
//                 else return false
// }


// function isTriangle(a,b,c){
//     let max = Math.max(a, b, c)
//     let sum = (a + b + c) - max;
//     if(max < sum)
//         return true
//     else
//        return false
// }


// console.log(isTriangle( 10 ,15 ,26 ));


//홀수 짝수 판별하기

// function toWeirdCase(string){
//     let arr = string.split(' ')
//     // console.log(arr)
//     let fullName = ''
//     arr.forEach(function(v, i){
//         let spl = arr[i].split('');
//         let newSpl = spl.map(function(al, j){
//             if(j % 2 == 0){
//                 return al.toUpperCase()
//             }else{
//                 return al.toLowerCase()
//             }
//         })
//         fullName += ' ' + newSpl.join('')
//     })
//     return fullName.trim()
// }



// function toWeirdCase(string){
//     let full = string.split(' ').map((x, i) => {
//          let word = x.split('').map((y, j) => {
//                      if(j % 2 == 0) return y.toUpperCase()
//                      else return y.toLowerCase()
//          })
//          return word.join('')
//     })
//      return full.join(' ')
// }

//  console.log(toWeirdCase("Weird string case"))



//트리보나치수열 구하기

// function tribonacci(signature, n){
//     let num = 0;
//     if(n <= 3){
//         return signature.splice(0, n); 
//     }

//     while(num < n-3){
//         let sum = 0;
//         for(let i=num; i<num+3; i++){
//             sum += signature[i]
//         }
//         signature.push(sum)
//         num++;
//     }
//     return signature
// }



// function tribonacci(signature, n){
//     if(n <= 3){ 
//               return signature.splice(0, n);
//     }
//     for(let i=0; i<n-3; i++){
//         signature.push(signature[i] + signature[i+1] + signature[i+2])
//     }
//     return signature
// }

// console.log(tribonacci ([0, 1, 1], 5));


//홀수짝수 판별하기


//reduce 사용법(ex)
// const numbers = [1, 2, 3, 4]
// const nubmersSum = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
//     console.log(accumulator, currentValue, currentIndex, array)
//     return accumulator + currentValue
// }, 10);

// console.log(nubmersSum);

//filter, map이용해서 reduce 사용하기(ex)
// //map처럼쓰기
// const numbers = [1, 2, 3, 4, 5]
// const numbersReduce = numbers.reduce((acc, cur) => {
//     acc.push(cur * 2)
//     return acc
// }, []);

// console.log(numbersReduce);

// //filter처럼처럼 쓰기(ex)
// const fruits = ['Apple', 'Banana', 'Lemon', 'Watermelon']
// const fruitsReduce = fruits.reduce((acc, cur) => {
//     if(cur.length > 5)
//         acc.push(cur)
//     return acc
// }, []);
// console.log(fruitsReduce);



// function findOdd(A){
//     console.log(A);
//     let searchNum = A.reduce(function(av, cv, i, arr){
//         console.log(`${av} ${cv} ${i} ${arr}`)
//         let count = 0;
//         let index = A.indexOf(cv)
//         console.log(cv, i, count)
//         while(index > -1){
//             count++
//             index = A.indexOf(cv, index+1)
//         }

//         if(count % 2 != 0){
//             console.log(cv, count)
//             return cv
//         }
//     }, A[0]);
// }
// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));


// function findOdd(A){
//     let serchNum = A.reduce(function(av, cv, i ,arr){
//         let count = 0;
//         let index = A.indexOf(cv)
//         console.log(cv, i, count)
//         while(index > -1){
//             count++
//             index = A.indexOf(cv, index+1)
//         }
//         if(count % 2 != 0){
//             return cv
//         } 
//         return av
//     }, A[0])
//     return serchNum
// }

// function findOddInt(A){
//     let isChecked = [];
    
//     for(let i=0; i<A.length; i++){
//         if(isChecked[A[i]]){
//             continue;
//         }else{
//             let count = 0;
//             let index = A.indexOf(A[i])
//             while(index > -1){
//                 count++
//                 index = A.indexOf(A[i], index + 1);
//             }

//             if(count % 2 === 1){
//                 return A[i];
//             }else{
//                 isChecked.push(A[i])
//             }
//         }
//     }
// }

// console.log(findOddInt([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));


//배열의 특정요소 맨뒤로 옮기기

// let moveZeros = function (arr) {
//     return arr.sort((l, r) => {
//     if(l === 0) return 1
//     else return -1
//     })
// }


// let moveZeros = function(arr){
//     let lastI =  arr.lastIndexOf(0);
//     while(lastI > -1){
//         arr.splice(lastI, 1)
//         arr.push(0)
//         lastI = arr.lastIndexOf(0, lastI-1)
//     }
//     return arr
// }


// let moveZeros = function(arr){
//     return arr.filter((x) => x != 0).concat(arr.filter((x) => x === 0))
// }

// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))



//재료
// 1) 레시피 재료와 내가 가진 재료를 하나하나 비교한다.
// 2) 꼭 필요한 재료인데 내가 가진 재료에 없다면 케이크를 만들 수 없으므로 0을 리턴한다.
// 3) 내가 가진 재료에서 레시피에서 필요한 재료만큼 뺀다.
// 4) 내가 가진 재료가 0보다 작아질때까지 계속 반복해서 뺀다.
// 5) 몇 번 반복했는지 센 다음 그 수를 리턴한다.


function cakes(recipe, available){
    let reKey = Object.keys(recipe)
    let avKey = Object.keys(available)
    console.log(reKey)
    console.log(avKey)
}


console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))





