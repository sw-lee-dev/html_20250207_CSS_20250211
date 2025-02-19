/*
    let
*/

/*
    블록 레벨 스코프 : 
    - 코드 블럭 내부에서 선언되어서 해당 코드 블럭 내에서만 사용 가능
*/
{
    var x = 10;
}
console.log(x);

// {
//     let y = 10;
// }
// console.log(y); >> ReferenceError: y is not defined

/*
    변수 중복 선언 불가 : 
    - 변수를 동일한 이름으로 여러개 선언 불가능
*/
var x = 1;
var x = 2;

// let y = 1;
// let y = 2; >> SyntaxError: Identifier 'y' has already been declared

/*
    호이스팅 : var, function 선언문으로 선언된 변수 혹은 함수에 대해서 최상단에 선언한 것과 같은 동작을 하는 것
    - let 키워드로 선언된 변수는 최상단에 선언은 되지만 실제 코드상 선언한 위치 이전까지는 일시적 사각지대에 빠트림
*/
console.log(z);
var z = 10;

// console.log(y); >> ReferenceError: Cannot access 'y' before initialization
// let y = 10;

/*
    const
*/

/*
    선언과 초기화 : 
    - const 키워드로 선언된 변수는 재할당 불가능
    - 선언과 동시에 반드시 초기화가 이루어져야함
*/
// const X; >> SyntaxError: Missing initializer in const declaration
const X = 10;

// X = 20; >> TypeError: Assignment to constant variable.

/*
    상수와 객체 : 
    - 코드의 가독성 향상을 위해 많이 사용됨
    - 객체를 사용할 때 변수에 할당 후 변경하지 못하고 속성만 접근 가능하게 상수에 담아줌
    - 일반적으로 object 타입들은 상수형 변수에 할당
*/
const king = { name: '이성계' };

// king = { name: '이방원' }; >> TypeError: Assignment to constant variable.
king.name = '이방원';

/*
    var, let, const
    - ES6+ 에서는 var을 사용하지 않음
    - 재할당이 이뤄져야하는 변수에서만 let을 사용
    - 나머지 대부분의 변수에 const를 사용
*/