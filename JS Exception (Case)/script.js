document.getElementById('divideBtn').addEventListener('click', function() {
    try {
      let result = 10 / 0; 
      document.getElementById('divideResult').innerText = `Hasil Pembagian: ${result}`;
    } catch (error) {
      document.getElementById('divideResult').innerText = `Terjadi kesalahan: ${error.message}`;
    }
  });
  
  document.getElementById('accessBtn').addEventListener('click', function() {
    try {
      let user = undefined;
      console.log(user.name);
    } catch (error) {
      document.getElementById('accessResult').innerText = `Terjadi kesalahan: ${error.message}`;
    }
  });
  