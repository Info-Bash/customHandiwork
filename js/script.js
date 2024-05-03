var images = ["img/aboutimg1.jpg", "img/aboutimg2.jpg", "img/aboutimg3.jpg", "img/aboutimg4.jpg", "img/aboutimg5.jpg", "img/aboutimg6.jpg"];
var currentImageIndex = 0;
var slideshowImg = document.getElementById('slideshow-img');

// Function to change the image with fade effect
function changeImageWithFade() {
  var opacity = 1;
  var fadeOutInterval = setInterval(function() {
    opacity -= 0.02;
    slideshowImg.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(fadeOutInterval);
      currentImageIndex = (currentImageIndex + 1) % images.length;
      slideshowImg.src = images[currentImageIndex];
      fadeIn();
    }
  }, 20); // Adjust the speed of fading
}

// Function to fade in the image
function fadeIn() {
  var opacity = 0;
  var fadeInInterval = setInterval(function() {
    opacity += 0.02;
    slideshowImg.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(fadeInInterval);
      setTimeout(function() {
        changeImageWithFade();
      }, 3000); // Change image after 3 seconds
    }
  }, 20); // Adjust the speed of fading
}

// Start the slideshow
changeImageWithFade();
