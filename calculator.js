// Globals
const elDisplay = document.getElementById('display');
let elInputs = document.getElementsByClassName('handleInput');

function handleInput(val){
    if(typeof val !== "string") return;
    elDisplay.value = elDisplay.value + val;
}

function clearInput(){
    elDisplay.value = "";
}

function backspaceInput(){
    if(elInputs.value === "")return;
    let newInput = elDisplay.value.split('');
    newInput.pop();
    elDisplay.value = newInput.join('');
}

function calculate(){
    if(elDisplay.value === "") return;
    elDisplay.value = eval(elDisplay.value);
}
console.log(elInputs);

for(input of elInputs){
    let newVal = input.dataset.calcVal;
    input.addEventListener('click', ()=>{
        handleInput(newVal);
    });
}