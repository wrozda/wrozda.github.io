var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image.jpg'){
        myImage.setAttribute('src', 'images/image2.jpg');
    } else {
        myImage.setAttribute('src', 'images/image.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Bądź task uprzejmy i podaj swe imię.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Witaj na stronie o płocie, ' + myNAme;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Witaj na stronie o płocie, '  + storedName;
}

myButton.onclick = function() {
    setUserName();
}