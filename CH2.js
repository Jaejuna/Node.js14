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
const string2 = `${num3} 더하기 ${num4}는 '${result}'` //가독성이 높아짐
console.log(string2);

//object literals, 객체 리터럴
var sayNode = function() { 
    console.log('Node');
};
var es = 'ES';

//before
//객체에 동적으로 속성을 추가
var oldObject = {
    sayJS: function() {
        console.log('JS');
    },
    sayNode: sayNode,
};
oldObject[es + 6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

//after
const newObject = {
    sayJS() {
        console.log('JS');
    },
    //메서드에 함수 연결 때 콜론을 붙이지 않음
    //속성명과 변수명이 같은 위에 예시 같이 코드 중복을 회피할 수 있음
    sayNode,
    //객체 리터럴 바깥에서 해도 됨
    [es + 6]: 'Fantastic',
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);

//arrow function, 화살표 함수
//add1, 2, 3, 4 전부 같은 기능이다.
function add1(x, y) {
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
};

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

//not1, 2도 마찬가지
function not1(x) {
    return !x;
}

const not2 = x => !x;