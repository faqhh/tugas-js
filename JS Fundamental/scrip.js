let number = 42;          
const name = "Alice";     
let isActive = true;     
let user = {             
  name: "John",
  age: 30
};

document.getElementById('showDataBtn').addEventListener('click', function() {
  const dataOutput = `
    Number: ${number} <br>
    Name: ${name} <br>
    Active: ${isActive} <br>
    User: ${user.name}, Age: ${user.age}
  `;
  document.getElementById('dataOutput').innerHTML = dataOutput;
});

document.getElementById('clickBtn').addEventListener('click', function() {
  alert("Button clicked!");
});

document.getElementById('changeContentBtn').addEventListener('click', function() {
  document.getElementById('content').innerText = "Content has been updated!";
});

let a = 10;
let b = 5;
let sum = a + b;
let diff = a - b;
let prod = a * b;
let quotient = a / b;

document.getElementById('calcOutput').innerHTML = `
  Sum: ${sum} <br>
  Difference: ${diff} <br>
  Product: ${prod} <br>
  Quotient: ${quotient}
`;
