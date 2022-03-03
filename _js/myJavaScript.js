let myName = "Nathan";
console.log(myName);

// this function logs a line of text in the browser
console.log("Hello World");

function init(){
    changeHeading();
    greeting();
}

// 
function changeHeading() {
    let myHeading = document.querySelector('h1');
    myHeading = document.querySelector('h2')
    myHeading.textContent = "Hello World";

}

function greeting(){
    const para = document.createElement("p");
para.innerText = myName;
document.body.appendChild(para);
}