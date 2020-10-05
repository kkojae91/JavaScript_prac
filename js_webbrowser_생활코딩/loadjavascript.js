// 파일로드 부분이 head-tag 안에 있을땐 아래와 같이 실행해줘야한다.
// window.onload = function(){
//     var hw1 = document.getElementById("hw1");
//     hw1.addEventListener("click", function(){
//         alert("Hi kkojae!");
//     })
// }

// 파일로드 부분이 body-tag 안에 있을땐 아래와 같이 실행해줘야한다.
var hw1 = document.getElementById('hw1');
hw1.addEventListener("click", function(){
    alert("Hi kkojae!");
})