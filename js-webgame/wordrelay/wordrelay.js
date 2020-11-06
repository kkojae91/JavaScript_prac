const button = document.querySelector("#button");

const dictionary = [];
// input의 값을 가지고 올때는 value, 나머지는 tag의 값을 가지고 올때는 textContent
button.addEventListener("click", () => {
    const wordTag = document.querySelector("#word");
    const inputTag = document.querySelector("#input");
    const errorTag = document.querySelector("#error");
    const word = wordTag.textContent;
    const input = inputTag.value;

    // includes(input) dictionary안에 input이 있는지 확인 하는 함수.
    if (dictionary.includes(input)) {
        errorTag.textContent = "중복 된 단어입니다.";
    } else {
        if (word[word.length - 1] === input[0]) {
            wordTag.textContent = input;
            // 정답일 경우 error칸을 지워준다.
            errorTag.textContent = "";
            inputTag.value = "";
            // .focus() input 입력란에 바로 입력할 수 있게 만들어 주기.
            inputTag.focus();
            dictionary.push(input);
        } else {
            errorTag.textContent = "틀렸습니다."
            // input값을 입력 된 후 지워준다.
            inputTag.value = "";
            inputTag.focus();
        }
    }
})
