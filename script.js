document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Add your sign-in logic here
    alert('Sign-in logic goes here!');
});

const binaryContainer = document.querySelector('.binary-background');
const binaryDigits = '011000110010100011100';

for (let i = 0; i < 100; i++) {
    const span = document.createElement('span');
    span.innerText = binaryDigits;
    span.style.left = `${i * 10}%`;
    binaryContainer.appendChild(span);
}
