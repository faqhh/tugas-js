let queue = ["ray", "fiki", "fadhilla", "farah"];

function displayQueue() {
  document.getElementById("queue").innerText = queue.join(", ");
}

document.getElementById('addNabila').addEventListener('click', function() {
  queue.push("nabila");
  displayQueue();
});

document.getElementById('addMazaElsi').addEventListener('click', function() {
  queue.push("maza", "elsi");
  displayQueue();
});

document.getElementById('removeFarah').addEventListener('click', function() {
  const indexFarah = queue.indexOf("farah");
  if (indexFarah > -1) {
    queue.splice(indexFarah, 1); 
  }
  displayQueue();
});


document.getElementById('serveRayFiki').addEventListener('click', function() {
  queue.shift();
  queue.shift(); 
  displayQueue();
});

document.getElementById('addTomi').addEventListener('click', function() {
  queue.unshift("tomi"); 
  displayQueue();
});

displayQueue();
