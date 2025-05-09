const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultElement = document.getElementById("result");
function checkPalindrome(str) {
  const cleanedInput = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedInput  = "";
  for (let i = cleanedInput.length - 1; i >= 0; i--) {
    reversedInput += cleanedInput[i];
  }
  return cleanedInput === reversedInput;
}

checkBtn.addEventListener("click", function () {
  const input = textInput.value.trim();
  if(input === "") {
    alert("Please input a value");
    return;
  }
  if (checkPalindrome(input)) {
    resultElement.textContent = `${input} is a palindrome`;
  } else {
    resultElement.textContent = `${input} is not a palindrome`;
  }
});
  
