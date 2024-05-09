let displayValue = '';
let operator = '';
let operand1 = null;
let operand2 = null;

function updateDisplay() {
  document.getElementById('display').innerText = displayValue || '0';
}

function clearAll() {
  displayValue = '';
  operator = '';
  operand1 = null;
  operand2 = null;
  updateDisplay();
}

function handleOperator(nextOperator) {
  if (operator && operand1 !== null) {
    operand2 = parseFloat(displayValue);
    calculate();
  } else {
    operand1 = parseFloat(displayValue);
  }
  operator = nextOperator;
  displayValue = '';
}

function calculate() {
  let result = 0;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    case '%':
      result = operand1 % operand2;
      break;
    default:
      result = parseFloat(displayValue);
      break;
  }
  displayValue = result.toString();
  operand1 = result;
  operand2 = null;
  operator = '';
  updateDisplay();
}

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    if (!isNaN(value) || value === '.') {
      displayValue += value;
    } else if (value === 'C') {
      clearAll();
    } else if (value === '=') {
      calculate();
    } else if (value === 'DEL') {
      displayValue = displayValue.slice(0, -1);
    } else {
      handleOperator(value);
    }
    updateDisplay();
  });
});
