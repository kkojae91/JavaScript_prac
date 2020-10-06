var start = document.getElementById('start');
console.log(start.firstChild); //#text // body와 ul 사이의 공백 문자들이 첫번째 자식이 되고
console.log(start.firstChild.nextSibling); //ul //첫번째 자식의 형제 자식을 찾으면 ul 태그에 접근할 수 있다.
console.log(start.firstChild.nextSibling.nextSibling); //#text // tag와 tag 사이에는 우리가 볼 수 없는 개행 문자 들 때문에 text라는게 잡힙니다.
console.log(start.firstChild.nextSibling.nextSibling.previousSibling); //ul  //다시 previous 이전의 형제 노드
console.log(start.firstChild.nextSibling.nextSibling.previousSibling.firstChild); //#text // tag와 tag사이에는 text존재
console.log(start.firstChild.nextSibling.nextSibling.previousSibling.firstChild.nextSibling); //li

console.group('그룹');
console.log(start.childNodes.length);
for (var i=0; i < start.childNodes.length; i+=1){
    console.log(start.childNodes[i]);
}
console.groupEnd();