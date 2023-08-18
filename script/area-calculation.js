function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseText = baseField.value;
    const base = parseFloat(baseText);

    const heightField = document.getElementById('triangle-height');
    const heightText = heightField.value;
    const height = parseFloat(heightText);

    baseField.value = '';
    heightField.value = '';

    if (isNaN(base) || isNaN(height)) {
        alert('Please enter a number');
        return;
    }

    const area = 0.5 * base * height;
    
    const triangleResult = document.getElementById('triangle-result');
    triangleResult.innerText = area;
};


function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthText = widthField.value;
    const width = parseFloat(widthText);
    console.log(width);

    const lengthField = document.getElementById('rectangle-length');
    const lengthText = lengthField.value;
    const length = parseFloat(lengthText);
    console.log(length);

    widthField.value = '';
    lengthField.value = '';

    if (isNaN(width) || isNaN(length)) {
        alert('please enter a number');
        return;
    }

    const area = width * length;
    
    const rectangleResult = document.getElementById('rectangle-result');
    rectangleResult.innerText = area;
};

function getInputValue (inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const input = parseFloat(inputText);

    inputField.value = '';

    return input;
}

function setElementInnerText(elementId, area){   
    if (isNaN(area)) {
        alert('Please enter a number');
        return;
    }
    const element = document.getElementById(elementId);
    element.innerText = area;
}

function calculateparallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setElementInnerText('parallelogram-result', area);  
};

// ellipse 
function calculateEllipseArea (){
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');
    const area = 3.14 * a * b;
    setElementInnerText('ellipse-area', area);
}
