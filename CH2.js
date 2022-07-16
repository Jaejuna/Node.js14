// const, let, var (scope)
if (true){
    var x = 3;
}
console.log(x); 

if (true){
    const y = 3;
}
console.log(y);

const a = 0;
a = 1;

let b = 0;
b = 1;

// const c; const have to be declared 

//template literals, 템플릿 문자열
// before
var num1 = 1;
var num2 = 2;
var result = 3;
//띄어쓰기 한 이유는 이스케이프(escape) 때문이다.
const string1 = num1 + ' 더하기 ' + num2 + '는 \'' + result + '\'';
console.log(string1);

//after
const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 '${result}'`
console.log(string2);

//object literals, 객체 리터럴
