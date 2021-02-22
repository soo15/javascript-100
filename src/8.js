//문제8 : 객체의 키 이름 중복(마지막키값 출력)
//전접근자와 각괄호 접근자의 차이알기

var d = {
  1: 180,
  height: 180,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1
};
console.log(d[1]);
console.log(d["weight"]);
