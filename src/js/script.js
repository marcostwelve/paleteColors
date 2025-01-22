const generateButton = document.getElementById('generate-button');
const colorsDiv = document.querySelector('.colors');
const quantityInput = document.getElementById('color-quantity');
const quantityColors = document.getElementById('quantity-colors');




function generateColor() {
    colorsDiv.innerHTML = '';

    for (let i = 0; i < quantityInput.value; i++) {
        const color = generateRandomColor();
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = color;
        const colorText = document.createElement('span');
        colorText.textContent = color;
        colorText.style.color = color;
        colorDiv.appendChild(colorText);
        colorsDiv.appendChild(colorDiv);
    }
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    //const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

quantityInput.addEventListener('input', function(e) {
    e.preventDefault();
    quantityColors.textContent = quantityInput.value;
});

generateButton.addEventListener('click', function(e) {
    if (quantityInput.value < 1) {
        alert('Please enter a value greater than 0');
        return;
    }

    generateColor();
});


