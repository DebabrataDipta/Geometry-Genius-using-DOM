
function calculateTriangleArea(){
    const base = getElementById('triangle-base');
    const height = getElementById('triangle-height');
    const newAreaValue = 0.5 * base * height;
    setValueToText('Triangle-Area', newAreaValue);
}
function calculateRectangleArea(){
    const width = getElementById('rectangle-width');
    const length = getElementById('rectangle-length');
    const newAreaValue = width * length;
    setValueToText('Rectangle-Area', newAreaValue);
}
function calculateParallelogramArea(){
    const base = getElementById('Parallelogram-base');
    const height = getElementById('Parallelogram-height');
    const newAreaValue = base * height;
    setValueToText('Parallelogram-Area', newAreaValue);
}
function calculateRhombusArea(){
    const distance1 = getElementById('Rhombus-distance1');
    const distance2 = getElementById('Rhombus-distance2');
    const newAreaValue = 0.5 * distance1 *distance2;
    setValueToText('Rhombus-Area', newAreaValue);
}
function calculatePentagonArea(){
    const input1= getElementById('Pentagon-p');
    const base = getElementById('Pentagon-base');
    const newAreaValue = 0.5 * input1 * base;
    setValueToText('Pentagon-Area', newAreaValue);
}
function calculateEllipseArea(){
    const input1 = getElementById('ellipse-input1');
    const input2 = getElementById('ellipse-input2');
    const newAreaValue =3.1416 * input1 * input2;
    setValueToText('Ellipse-Area', newAreaValue);
}