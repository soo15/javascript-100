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


    function maskify(cc) {
        var len = cc.length
        if (len <= 4) {
            return cc
        } else {
            var piece = cc.slice(len-4, len)
            var newSt = '';
            for(var i=0; i<len-4; i++) {
                newSt += '#'
            }
            return newSt += piece
        }
    }
    
    
    출처: https://im-developer.tistory.com/33?category=831367 [Code Playground]


    console.log(maskify(4556364607935616));