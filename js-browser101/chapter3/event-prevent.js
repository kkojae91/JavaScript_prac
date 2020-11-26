'use strict';

// wheel 같이 계속해서 그리고 빠르게 동작하는 친구들?은 preventDefault를 개무시하고 할일을한다.
// console창에는 오류를 띄워주고, 하지만 option값에 passive:false 를 놓으면 preventDefault를 사용할 수 있다.
// 즉, 이 이벤트에서는 스크롤 (마우스 휠이 동작 되지 않는다.)이 되지 않는다.
// 하지만, passive: true가 default값 인것들은 웬만하면 preventDefault()를 호출하지 않는게 좋다!!
document.addEventListener(
  'wheel',
  (event) => {
    console.log('scrolling');
    // event.preventDefault();
  }
  // { passive: false }
);

const checkbox = document.querySelector('input');
checkbox.addEventListener('click', (event) => {
  console.log('checked!');
  // event에서 브라우저에서 기본적으로 실행되야하는 행동을 취소해버린다.
  // 현재 상황에서는 checkbox에 check가 되어야하는데 check가 되지 않습니다.
  // 변화는 주지 않고 이벤트 안의 코드는 실행된다.
  event.preventDefault();
});
