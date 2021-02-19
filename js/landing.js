window.onload = function() {
    var images = [];
    images[0] = "first";
    images[1] = "second";
    images[2] = "third";
    document.getElementById(images[0]).classList.add("active");
    let counter = 0;
    var time = 2000;

    function slideshow() {
        document.getElementById(images[counter]).classList.remove("active");
        counter++;
        if (counter >= images.length) {
            counter = 0;
        }
        document.getElementById(images[counter]).classList.add("active");
    }

    setInterval(slideshow, time)
}