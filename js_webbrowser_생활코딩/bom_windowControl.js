var open1 = document.getElementById("open1");
open1.addEventListener("click", function(){
    window.open("https://www.naver.com");
})

var open2 = document.getElementById("open2");
open2.addEventListener("click", function(){
    window.open("https://www.naver.com", '_self');
})

var open3 = document.getElementById("open3");
open3.addEventListener("click", function(){
    window.open("https://www.naver.com", '_blank');
})

var open4 = document.getElementById("open4");
open4.addEventListener("click", function(){
    window.open("https://www.naver.com", 'ot');
})

var open5 = document.getElementById("open5");
open5.addEventListener("click", function(){
    window.open("https://www.naver.com", '_blank', 'width=200px, hight=200px, resizable=yes')
})