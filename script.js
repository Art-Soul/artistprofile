function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    var btnImage = document.getElementById("buttonImage");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        btnImage.src = "assets/more.png";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        btnImage.src = "assets/less.png";
    }

    // Add an error event listener to the image
    btnImage.onerror = function() {
        console.error("Failed to load image: " + btnImage.src);
    };
}