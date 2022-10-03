let input_box = document.getElementById("calculation");

function UserClickButton(input) {

    let oldinput = input_box.value;
    let newinput = oldinput + input;
    input_box.value = newinput;
}

function calculateValue() {
    let input = input_box.value;
    let result = eval(input);
    input_box.value = result;
}

function clearData() {
    input_box.value = ""
}

