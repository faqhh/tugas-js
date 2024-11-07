
document.getElementById('checkAgeBtn').addEventListener('click', function() {
    let age = 30;
    let result = age >= 18 ? "You are an adult." : "You are a minor.";
    document.getElementById('ageOutput').innerText = result;
  });
  
  document.getElementById('loopBtn').addEventListener('click', function() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
      output += `Loop iteration: ${i}<br>`;
    }
    document.getElementById('loopOutput').innerHTML = output;
  });
 
  document.getElementById('switchBtn').addEventListener('click', function() {
    let fruit = "banana";
    let message = "";
    switch (fruit) {
      case "apple":
        message = "Apple selected.";
        break;
      case "banana":
        message = "Banana selected.";
        break;
      case "orange":
        message = "Orange selected.";
        break;
      default:
        message = "Fruit not found.";
    }
    document.getElementById('switchOutput').innerText = message;
  });
  