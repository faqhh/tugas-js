function basicFunction() {
    return "This is a basic function!";
  }
  
  document.getElementById('basicFunctionBtn').addEventListener('click', function() {
    document.getElementById('basicOutput').innerText = basicFunction();
  });
  
  function greetUser(name) {
    return `Hello, ${name}! Welcome to the JavaScript world.`;
  }
  
  document.getElementById('paramFunctionBtn').addEventListener('click', function() {
    let userName = "Alice";  
    document.getElementById('paramOutput').innerText = greetUser(userName);
  });
  
  function addNumbers(a, b) {
    return a + b;
  }
  
  document.getElementById('returnFunctionBtn').addEventListener('click', function() {
    let sum = addNumbers(5, 7);
    document.getElementById('returnOutput').innerText = `The sum of 5 and 7 is: ${sum}`;
  });
  
  const arrowFunction = () => {
    return "This is an arrow function!";
  };
  
  document.getElementById('arrowFunctionBtn').addEventListener('click', function() {
    document.getElementById('arrowOutput').innerText = arrowFunction();
  });
  