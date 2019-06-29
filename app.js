// Get UI elements
let celsiusInput = document.getElementById('celInput');
let fahrenheitInput = document.getElementById('fahInput');
let kelvinInput = document.getElementById('kelInput');
let celsiusOutput = document.getElementById('celOutput');
let fahrenheitOutput = document.getElementById('fahOutput');
let kelvinOutput = document.getElementById('kelOutput');

// Calculate from Celsius input
celsiusInput.addEventListener('input', (e) => {

  let cel = parseFloat(e.target.value);

    if(isFinite(cel)) {
      fahrenheitOutput.innerHTML = ((cel * 9/5) + 32).toFixed(2);
      kelvinOutput.innerHTML = ((cel + 273.15)).toFixed(2);
    } else {
      fahrenheitOutput.innerHTML = '';
      kelvinOutput.innerHTML = '';
    }
  });

// Calculate from Fahrenheit
fahrenheitInput.addEventListener('input', (e) => {

  let fah = parseFloat(e.target.value);
  
    if(isFinite(fah)) {
      celsiusOutput.innerHTML = ((fah - 32) * 5/9).toFixed(2);
      kelvinOutput.innerHTML = ((fah - 32) * 5/9 + 273.15).toFixed(2);
    } else {
      celsiusOutput.innerHTML = '';
      kelvinOutput.innerHTML = '';
    }
  });

// Calculate from Kelvin
kelvinInput.addEventListener('input', (e) => {

  let kel = parseFloat(e.target.value);
  
    if(isFinite(kel)) {
      celsiusOutput.innerHTML = (kel - 273.15).toFixed(2);
      fahrenheitOutput.innerHTML = ((kel - 273.15) * 9/5 + 32).toFixed(2);
    } else {
      celsiusOutput.innerHTML = '';
      fahrenheitOutput.innerHTML = '';
    }
  });


// Clear input and output fields

celsiusInput.addEventListener('blur', clearField);
fahrenheitInput.addEventListener('blur', clearField);
kelvinInput.addEventListener('blur', clearField);

function clearField (e) {
  this.value = '';
  celsiusOutput.innerHTML = '';
  fahrenheitOutput.innerHTML = '';
  kelvinOutput.innerHTML = '';
}

clearField();