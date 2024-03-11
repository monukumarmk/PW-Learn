const resultEI = document.getElementById("result");
const generateEI = document.getElementById("generate");
const lengthtEI = document.getElementById("length");
const uppercaseEI = document.getElementById("uppercase");
const lowercaseEI = document.getElementById("lowercase");
const numbersEI = document.getElementById("numbers");
const symbolsEI = document.getElementById("symbols");
const clipboardEI = document.getElementById("clipboard");
const errorEI = document.getElementById("ShowError");

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYA';
const numericChars = '0123456789';
const specialChars = '!@#$%^&*()_+|[]{}:;<>.?';


// Define character sets 
generateEI.addEventListener("click", () =>{
    console.log('CLICKED');
    resultEI.style.color = "black";
    const length = lengthtEI.value;
    const lower = lowercaseEI.ariaChecked;
    const upper = uppercaseEI.ariaChecked;
    const number = numbersEI.ariaChecked;
    const symbol = symbolsEI.ariaChecked;
    const password = generatePassword(length, lowercase, uppercase, number, symbol);
       resultEI.innerText = password
});

// Function to generate a random character form a given character set 
function getRandomChar(charSet) {
    const randomIndex = Math.floor(Math.random() * charSet.lenght);
    return charSet.charAT(randomIndex);
}

// Function to generate a random password 
function generatePassword(length, useLowercase, useUppercase, useNumbers, useSpecialChars) {
    let charSet = '';
    if(length<4 || length>20){
        errorEI.style.color = "red"
        errorEI.innerHTML = 'Yor must choose only length between 4 and 20 for the password.'
        return '';
    }
    if (useLowercase)charSet += lowercaseChars;
    if (useUppercase)charSet += uppercaseChars;
    if (useNumbers)charSet += numericChars;
    if (useSpecialChars) charSet += specialChars;

    if(charSet === '') {
        errorEI.style.color = "red"
        errorEI.innerHTML = 'Yor must select at least one character set for the password.'
        return ''; 
    }

    let password = '';
    for (let i=0; i < length; i++){
        const randomChar = getRandomChar(charSet);
        password += randomChar;
    }
    errorEI.innerHTML = ''
    resultEI.style.background = "transparent";
    return password;
}

clipboardEI.addEventListener("click", () => {
    console.log(resultEI.innerHTML);
    if(resultEI.innerHTML.includes(' ') || resultEI.innerHTML === "")
    return;
  resultEI.style.background = "#0000ff5c";
  errorEI.innerHTML = 'copied' ;
  errorEI.style.color = "green";
  navigator.clipboard.writeText(resultEI.textContent);
});
