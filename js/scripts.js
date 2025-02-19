// Constants for query selector
const customNumberInput = document.getElementById('customNumber');
const custColorButton = document.querySelector('.custColor');
const randColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const imageDisplay = document.getElementById('images');
const studentIdParagraph = document.getElementById('myStudentId');

const studentId = "200589230";

// Image sources
const imageSources = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg', 'img/img5.jpg'];

// Function to change bg color from user input and add student id
function changeCustomColor() {
    var inputValue = Number(customNumberInput.value);
    studentIdParagraph.textContent = studentId;
    bgColor(inputValue);
}

// Function to change bg color from random no.
function changeRandomColor() {
    var randomValue = Math.floor(Math.random() * 100) + 1;
    bgColor(randomValue);
}

// Function to set color based on value
function bgColor(value) {
    var color;
    if (value < 0 || value > 100) color = 'red';
    else if (value <= 20) color = 'green';
    else if (value <= 40) color = 'blue';
    else if (value <= 60) color = 'orange';
    else if (value <= 80) color = 'purple';
    else color = 'yellow';

    document.body.style.backgroundColor = color;
}

// Function to generate options for select list
function addList() {
    for (var i = 0; i < imageSources.length; i++) {
        var option = document.createElement('option');
        option.value = imageSources[i];
        option.textContent = 'Image ' + (i + 1);
        imageSelect.appendChild(option);
    }
}

// Function to change image
function changeImage() {
    var selectedImage = imageSelect.value;
    if (selectedImage) {
        imageDisplay.src = selectedImage;
        imageDisplay.alt = 'Selected image: ' + selectedImage.split('/').pop();
    }
}

// Event listeners
custColorButton.addEventListener('click', changeCustomColor);
randColorButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('change', changeImage);

// Add images to select list when page loads
window.onload = addList;
