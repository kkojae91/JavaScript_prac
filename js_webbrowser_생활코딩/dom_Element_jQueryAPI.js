// 속성 제어
var target = $('#target'); // #target을 jQuery객체로 불러온다.
console.log(target.attr('href')); // http://opentutorials.org
target.attr('title', 'opentutorials.org'); // 객체.attr('속성','속성값') 을 활용해서 속성값을 설정할 수 있다.
console.log(target.attr('title')); // opentutorials.org
target.removeAttr('title'); // target의 attribute인 'title'을 지워준다. <객체.removeAtrr('')을 이용해서>
console.log(target.attr('title')); //undefined

// attribute와 property
var t1 = $('#t1');
console.log(t1.attr('href')); // ./dom_Element_jQueryAPI.html
console.log(t1.prop('href')); // http://127.0.0.1:5500/dom_Element_jQueryAPI.html

var t2 = $('#t2');
console.log(t2.attr('checked')); // checked
console.log(t2.prop('checked')); // true

// jQuery에서는 class className 둘다 호완 되서 적용된다.
var target1 = $('#target1');
target1.prop('className', 'important');
var target2 = $('#target2');
target2.prop('class', 'current');
// target2.attr('class', 'a');

// var marked = $('.marked', '#active');
// 위의 방법과 아래의 방법은 동일하다.
var marked = $('#active .marked');
marked.css('background-color','red');

// find() 체인을 끊지 않고 작업의 대상을 변경하고 싶을 때 사용한다.
// find를 남발하면 유지 보수에 어려움이 따른다.
var active = $('#active');
active.css('color', 'red').find('.marked').css('background-color','yellow');