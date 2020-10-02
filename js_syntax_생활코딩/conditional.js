// if (연산자){실행할 문구들..}
// 연산자가 true일 경우만 실행할 문구들이 실행된다.
// if (true){
//     alert("result : true")
// }

// 연산자가 false이기 때문에 아래 alert는 실행되지 않는다.
// if (false){
//     alert("result: true")
// }

// 연산자가 true이기 때문에 {}안이 실행된 후 마지막 줄의 alert 역시 실행된다.
// if (true){
//     alert(1);
//     alert(2);
//     alert(3);
// }
// alert(4);

// 연산자가 false 이기 때문에 {}는 실행 되지 않고 마지막 줄의 alert만 실행된다.
// if (false){
//     alert(1);
//     alert(2);
//     alert(3);
// }
// alert(4);

// if else 문
// if가 ture이면 if의 {}를 실행 그렇지 않다면(if가 false이면) else의 {}를 실행
// if가 false이면 if의 {}를 실행하지 않고, else의 {}를 실행해준다.
// if (true){
//     alert(1)
// } else{
//     alert(2);
// }

// if (false){
//     alert(1);
// } else{
//     alert(2);
// }

// python if elif else 와 똑같다.
// 첫번째 else if 문이 true이기 때문에 첫번째 else if의 {}가 실행되고,
// 두번째 else if 와 else문은 실행 되지 않는다.
// if (false){
//     alert(1);
// } else if (true){
//     alert(2);
// } else if (true){
//     alert(3);
// } else{
//     alert(4);
// }

// if (false){
//     alert(1);
// } else if (false){
//     alert(2);
// } else if (false){
//     alert(3);
// } else{
//     alert(4);
// }

// 조건문의 응용.
// variable활용
// var a = 1;
// if (a===1){
//     alert(1);
// } else {
//     alert(2);
// }

// prompt 파이썬의 input과 같음.
// var a;
// a = prompt("how old are you?");
// console.log(a);

// alert(prompt("how old are you?") * 20);

// var id = prompt("아이디를 입력해주세요.");

// if (id === "kkojae"){
//     alert("아이디가 일치 합니다.");
    
//     var pw = prompt("비밀번호를 입력해주세요.");

//     if (pw === "1234"){
//         alert("로그인이 되었습니다."+ id + "님 환영합니다.");
//     } else {
//         alert("비밀번호를 확인해주세요.");
//     }
// } else {
//     alert("아이디가 일치 하지 않습니다.");
// }

// 논리연산자
// && === and
// var id = prompt("아이디를 입력해주세요.");
// var pw = prompt("비밀번호를 입력해주세요.")
// if (id === "kkojae" && pw==="1234"){
//     alert("로그인이 되었습니다.\n"+id+"님 환영합니다.")
// } else{
//     alert("아이디와 비밀번호를 확인해주세요.")
// }


// || === or
var id = prompt("아이디를 입력하세요.")
var pw = prompt("비밀번호를 입력해주세요.")
if ((id==="egoing" || id==="kkojae" || id==="kkojae_") && (pw==="1234")){
    alert("인증 되었습니다.")
} else{
    alert("인증에 실패하였습니다.")
}