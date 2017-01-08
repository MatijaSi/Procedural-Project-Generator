var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, World!'; // Change heading to "Hello, world!"

/* Pop-up window with "Hey! :)" when user clicks page */
document.querySelector('html').onclick = function() {
    alert('Hey! :)');
}

var myImage = document.querySelector('img');

myImage.onclick = function() { // change image displayed when user clicks it
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lambda.png') {
	myImage.setAttribute('src', 'images/hawk.jpg');
    } else {
	myImage.setAttribute('src', 'images/lambda.png');
    }
}
