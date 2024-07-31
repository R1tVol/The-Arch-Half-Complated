const form = document.querySelector('form');
const codeInput = document.querySelector('#code');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = codeInput.value;
    if (code === '17340') { 
        window.location.href = 'cave.html'; // URL at
    } else {
        resultDiv.innerHTML = 'Invalid code';
    }
});
