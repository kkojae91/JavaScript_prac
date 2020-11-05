// querySelector의 .value .textContent 의 차이는?!
document.querySelector("#click").addEventListener("click", () => {
    const firstNumber = document.querySelector("#first-number").value;
    const secondNumber = document.querySelector("#second-number").value;
    const result = document.querySelector("#result");
    if (firstNumber) {
        if (secondNumber) {
            result.textContent = firstNumber * secondNumber;
        } else {
            result.textContent = "두 번째 값을 입력하세요.";
        }
    } else {
        result.textContent = "첫 번째 값을 입력하세요.";
    }
})