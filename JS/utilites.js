function getElementById(inputId){
    const userField = document.getElementById(inputId);
    const userValueText = userField.value;
    const userValue = parseFloat(userValueText);
    userField.value='';
    return userValue;
}
function setValueToText(elementId, newValue){
    const userField = document.getElementById(elementId);
    userField.innerText = newValue;
}