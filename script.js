
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];
let current = 0;

document.getElementById("startButton").onclick = () => {
    document.querySelector(".cover").classList.add("hidden");
    document.querySelector(".slideshow-container").classList.remove("hidden");
    setInterval(() => {
        current = (current + 1) % images.length;
        document.getElementById("slide").src = images[current];
    }, 2000);
};
