// 
var typed = new Typed('#element', {
    strings: ['Front-End Developer.', ' A Sports Enthusiast.', ' Also Graphic Designer.'],
    typeSpeed: 60,
    loop: false,
    onComplete: function () {
        typed.reset(); // Reset the Typed.js instance
        typed.start(); // Start the animation again
    }
});