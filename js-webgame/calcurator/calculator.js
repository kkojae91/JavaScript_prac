const numberInput = document.querySelector("#input");
const clearButton = document.querySelector("#clear");
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const calculateButton = document.querySelector("#calculator");
const resultInput = document.querySelector("#result");

// 빈값 생성 temp, operator
// 할당되는 값이 계속 변경 될 때는 let을 사용!
let temp;
let operator;

plusButton.addEventListener("click", () => {
    if (temp) {
        operator = "+"
        numberInput.value = null;
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value);
            operator = "+";
            numberInput.value = null;
            resultInput.value = null;
        }
    }
})

minusButton.addEventListener("click", () => {
    if (temp) {
        operator = "-"
        numberInput.value = null;
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value);
            operator = "-";
            numberInput.value = null;
            resultInput.value = null;
        }
    }
})

divideButton.addEventListener("click", () => {
    if (temp) {
        operator = "/"
        numberInput.value = null;
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value);
            operator = "/";
            numberInput.value = null;
            resultInput.value = null;
        }
    }
})

multiplyButton.addEventListener("click", () => {
    if (temp) {
        operator = "X"
        numberInput.value = null;
    } else {
        if (numberInput.value) {
            temp = Number(numberInput.value);
            operator = "X";
            numberInput.value = null;
            resultInput.value = null;
        }
    }
})

clearButton.addEventListener("click", () => {
    numberInput.value = "";
    // 변수 값을 초기화 할때는 null, undefined 을 쓴다
    temp = null;
    operator = null;
    resultInput.value = null;
})

calculateButton.addEventListener("click", () => {
    console.log(temp, operator, numberInput.value);
    if (operator) {
        if (numberInput.value) {
            if (operator === "+") {
                resultInput.value = temp + Number(numberInput.value);
            } else if (operator === "-") {
                resultInput.value = temp - Number(numberInput.value);
            } else if (operator === "/") {
                resultInput.value = temp / Number(numberInput.value);
            } else if (operator === "X") {
                resultInput.value = temp * Number(numberInput.value);
            }
            // temp값에는 항상 Number를 선언해서 담아준다. value값을 가지고 오면 문자열이 저장 되기 때문.
            temp = Number(resultInput.value);
        }
    } else {
        if (numberInput.value) {
            resultInput.value = temp;
        }
    }
})
