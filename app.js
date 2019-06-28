const celsius = document.getElementById('celInput').addEventListener('input', (e) => {

  let cel = parseFloat(e.target.value);
  
  if(isFinite(cel)) {
    document.getElementById('fahOutput').innerHTML = ((cel * 9/5) + 32).toFixed(2);
    document.getElementById('kelOutput').innerHTML = ((cel + 273.15)).toFixed(2);
  } else {
    document.getElementById('fahOutput').innerHTML = '';
    document.getElementById('kelOutput').innerHTML = '';
  }
});

const fahrenheit = document.getElementById('fahInput').addEventListener('input', (e) => {

  let fah = parseFloat(e.target.value);
  
  if(isFinite(fah)) {
    document.getElementById('celOutput').innerHTML = ((fah - 32) * 5/9).toFixed(2);
    document.getElementById('kelOutput').innerHTML = ((fah - 32) * 5/9 + 273.15).toFixed(2);
  } else {
    document.getElementById('celOutput').innerHTML = '';
    document.getElementById('kelOutput').innerHTML = '';
  }
});

const kelvin = document.getElementById('kelInput').addEventListener('input', (e) => {

  let kel = parseFloat(e.target.value);
  
  if(isFinite(kel)) {
    document.getElementById('celOutput').innerHTML = (kel - 273.15).toFixed(2);
    document.getElementById('fahOutput').innerHTML = ((kel - 273.15) * 9/5 + 32).toFixed(2);
  } else {
    document.getElementById('celOutput').innerHTML = '';
    document.getElementById('fahOutput').innerHTML = '';
  }
});

