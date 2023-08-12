let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    // Replace the symbols with the correct JavaScript operator 
    displayValue = displayValue.replace(/x/g, '*');
    displayValue = displayValue.replace(/%/g, '/ 100 *');
    displayValue = displayValue.replace(/÷/g, '/');

    
    const result = parseFloat(eval(displayValue)); 
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

