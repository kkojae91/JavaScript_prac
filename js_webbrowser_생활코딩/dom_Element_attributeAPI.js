var target = document.getElementById('target');
console.log(target.getAttribute('href'));  // http://opentutorials.org

console.group("hasAttribute('title')")
    // target이 'title'이라는 속성을 가지고 있는지 확인하는 방법
    // 객체.hasAttribute("title")  <<--- 속성을 가지고 있다면 true 속성이 없다면 false를 리턴해줍니다.
    // 아래와 같은 방법으로 속성을 추가 해줄수 있습니다.
    // 객체.setAttribute("속성명", "속성값")
    console.log(target.hasAttribute('title'));
    target.setAttribute('title', 'opentutorials.org');
    console.log(target.hasAttribute('title'));
    // 속성 삭제하는 방법
    // 객체.removeAttribute("")
    target.removeAttribute('title');
    console.log(target.hasAttribute('title'));
console.groupEnd();

console.group('attribute property 비교');
    var target2 = document.getElementById('target2');
    // property method
    target2.className = 'current';
    console.log(target2.getAttribute('class'));
    // attribute method
    target2.setAttribute('class', 'important');
    console.log(target2.getAttribute('class'));
console.groupEnd();

console.group('attriubte property 비교2');
    var target3 = document.getElementById('target3');
    console.log('target3.href -->>', target3.href);
    // 위의 결과는 http://127.0.0.1:5500/dom_Element_attributeAPI.html
    console.log("target3.getAttribute('href') -->>", target3.getAttribute('href'));
    // 위의 결과는 ./dom_Element_attributeAPI.html

    // attribute와 property는 미묘한 차이가 있다..... 
console.groupEnd();