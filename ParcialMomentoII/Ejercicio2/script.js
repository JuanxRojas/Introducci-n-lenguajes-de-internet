let display = document.getElementById('display');
let currentInput = '0';

function input(value) {
  if (currentInput === '0' && value !== '.') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  display.innerText = currentInput;
}

function clearDisplay() {
  currentInput = '0';
  display.innerText = currentInput;
}

function toggleSign() {
  if (currentInput.startsWith('-')) {
    currentInput = currentInput.slice(1);
  } else {
    currentInput = '-' + currentInput;
  }
  display.innerText = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = 'Error';
  }
  display.innerText = currentInput;
}
