function alertName() {
    const name = document.getElementById("name").value;
    if (name) {
        alert(`Hi ${name}!`);
    } else {
        alert("Please enter your name.");
    }
}

let isBlue = true;
function changeColor() {
    if (isBlue) {
        document.body.style.backgroundColor = "lightblue";
    } else {
        document.body.style.backgroundColor = "lightcoral";
    }
    isBlue = !isBlue;
}

function validateText() {
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const text = document.getElementById("text-to-validate").value;
    if (validation.test(text)) {
        alert("Text contains special characters.");
    } else {
        alert("Text is valid.");
    }
}

function addText() {
    const heading = document.getElementById("page-heading");
    heading.textContent += " Add Text";
}