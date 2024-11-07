function divideNumbers() {
    const numerator = parseFloat(document.getElementById('numerator').value);
    const denominator = parseFloat(document.getElementById('denominator').value);
    const messageElement = document.getElementById('message');

    messageElement.textContent = '';

    try {
        if (isNaN(numerator) || isNaN(denominator)) {
            throw new Error("Input harus berupa angka.");
        }

        if (denominator === 0) {
            throw new Error("Penyebut tidak boleh nol.");
        }

        const result = numerator / denominator;
        messageElement.textContent = `Hasil: ${result}`;
        messageElement.className = 'result';
    } catch (error) {
        messageElement.textContent = error.message;
        messageElement.className = 'error';
    }
}
