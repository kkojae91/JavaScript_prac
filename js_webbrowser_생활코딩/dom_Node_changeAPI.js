var button1 = document.getElementById('button1');
button1.addEventListener('click', function(){
    var target = document.getElementById('target');
    // tag 생성할땐
    // document.createElement() 를 사용한다.
    var li = document.createElement('li');
    // text 생성할땐
    // document.createTextNode() 를 사용한다.
    var text = document.createTextNode('React');
    // text를 li에 appendChild해주고, li를 target에 appendChild해준다.
    li.appendChild(text);
    target.appendChild(li);
    // 위의 두줄을 아래의 한줄로 만들어 줄 수 있다.
    // target.appendChild(li).appendChild(text);
})

var button2 = document.getElementById('button2');
button2.addEventListener('click', function(){
    var target = document.getElementById('target');
    var li = document.createElement('li');
    var text = document.createTextNode('jQuery');
    li.appendChild(text);
    // 객체.insertBefore(li, target.firstChild)  << firstChild 자리로 추가 해준다. 
    // appendChild는 맨 뒤에 추가
    target.insertBefore(li, target.firstChild);
})

var button3 = document.getElementById('button3');
button3.addEventListener('click', function(){
    var target2 = document.getElementById('target2');
    // 객체명.parentNode.removeChild(객체명) 을 통해 삭제하고 싶은 객체를 삭제할 수 있다.
    target2.parentNode.removeChild(target2);
})

var button4 = document.getElementById('button4');
button4.addEventListener('click', function(){
    // document.createElement('a') 를 통해 a_tag 생성
    var a = document.createElement('a');
    // document.createTextNode('Coding Everybody') 를 통해 a tag 안에 들어갈 text생성.
    var text = document.createTextNode('Coding EveryBody');
    // a tag 안에 href 속성 추가
    a.setAttribute('href', 'http://opentutorials.org');
    // appendChild를 통해 생성해둔 text를 추가 해준다.
    a.appendChild(text);
    
    var target3 = document.getElementById('target3');
    // target3(여기에 있는 target3을 첫번째 인자로 오는 a와 바꿔준다).replaceChild(a, target3.firstChild(a태그가 새롭게 들어갈 위치 선정.));
    target3.replaceChild(a, target3.firstChild);
})