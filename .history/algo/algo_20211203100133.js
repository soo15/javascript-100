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

function toWeirdCase(string){
    let arr = string.split(' ')
    let fullName = ''
    arr.forEach(function(v, i){
        let spl = arr[i].spit('');
        let newSpl = spl.map(function(al, j){
            if(j % 2 == 0){
                return al.toUpperCase()
            }else{
                return al.toLowerCase()
            }
        })
        fullName += ' ' + newSpl.join('')
    })
    return fullName.trim()
}


console.log(toWeirdCase("Weird string case"))