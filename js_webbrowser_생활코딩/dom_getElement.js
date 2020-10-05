// 객체.getElementsByTagName()
// ul태그가 여러개 존재할때 접근 대상을 좁히기 위해선 아래와 같이 하면 된다.
var ul = document.getElementsByTagName("ul")[0];
var lis = ul.getElementsByTagName("li");
for (var i = 0; i < lis.length; i += 1){
    lis[i].style.color = 'red';
}

// 객체.getElementsByClassName()
// class의 값이 "active"인 것들만 잡아온다.
var lis2 = document.getElementsByClassName("active");
for (var i = 0; i < lis2.length; i += 1){
    lis2[i].style.color ='blue';
}

// 객체.getElementById()
// id속성은 하나의 값만 가진다. Element << s가 빠진다.
var lis3 = document.getElementById("active");
lis3.style.color = 'skyblue';

// 객체.querySelector() 
// 같은 값을 가지고 있는 객체가 여러개있더라도, 같은 객체들 중 하나에 접근해서 그 값만 변경해준다.
var li = document.querySelector('li');
li.style.color = 'green';
var li = document.querySelector('.active');
li.style.color = 'black';


// 객체.querySelectorAll()
// 태그 전체를 선택해준다.
var li_all = document.querySelectorAll('li');
for (var idx in li_all){
    li_all[idx].style.color = "gray";
}
// 위와 아래의 코드는 같은 의미의 코드 입니다.
// for (var i = 0; i < li_all.length; i += 1){
//     li_all[i].style.color = 'gray';
// }