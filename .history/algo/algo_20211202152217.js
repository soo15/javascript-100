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


    function findShort(s){
        let wordArr = s.split(' ');
        let min = wordArr[0].length;
        console.log(min)l
        
        for(let word of wordArr){
            if(word.length < min){
                min = word.length
            }
        }
        return min
    }


    console.log(findShort('bitcoin take over the world maybe who knows perhaps'))