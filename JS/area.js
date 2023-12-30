
function calculateTriangleArea(){
    const base = getElementById('triangle-base');
    const height = getElementById('triangle-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please enter a number');
    }
    const newAreaValue = 0.5 * base * height;
    setValueToText('Triangle-Area', newAreaValue);
}
function calculateRectangleArea(){
    const width = getElementById('rectangle-width');
    const length = getElementById('rectangle-length');
    if(isNaN(width) || isNaN(length)){
        alert('Please enter a number');
        return;
    }
    const newAreaValue = width * length;
    setValueToText('Rectangle-Area', newAreaValue);
}
function calculateParallelogramArea(){
    const base = getElementById('Parallelogram-base');
    const height = getElementById('Parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert('Please enter a number');
    }
    const newAreaValue = base * height;
    setValueToText('Parallelogram-Area', newAreaValue);
    // add to calculation entry 
    addToCalculationEntry('Parallelogram', newAreaValue);
}
function calculateRhombusArea(){
    const distance1 = getElementById('Rhombus-distance1');
    const distance2 = getElementById('Rhombus-distance2');
    if(isNaN(distance1) || isNaN(distance2)){
        alert('Please enter a number');
    }
    const newAreaValue = 0.5 * distance1 *distance2;
    setValueToText('Rhombus-Area', newAreaValue);
}
function calculatePentagonArea(){
    const input1= getElementById('Pentagon-p');
    const base = getElementById('Pentagon-base');
    if(isNaN(input1) || isNaN(base)){
        alert('Please enter a number');
    }
    const newAreaValue = 0.5 * input1 * base;
    setValueToText('Pentagon-Area', newAreaValue);
}
function calculateEllipseArea(){
    const input1 = getElementById('ellipse-input1');
    const input2 = getElementById('ellipse-input2');
    if(isNaN(input1) || isNaN(input2)){
        alert('Please enter a number');
    }
    const newAreaValue =3.1416 * input1 * input2;
    setValueToText('Ellipse-Area', newAreaValue);

    addToCalculationEntry('Ellipse', newAreaValue);
}
// add to calculation entry 
function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' '+ area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${areaType} ${area}  cm<sup>2</sup> <button class="btn text-white btn-success">Convert</button>`;
    calculationEntry.appendChild(p);
}