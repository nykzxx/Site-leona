document.getElementById("image1").addEventListener('mouseenter', (event) => {
    event.target.style.transform = 'scale(1.1)';
    document.getElementById('image2').style.filter = "grayscale(100%)";
    document.getElementById('image3').style.filter = "grayscale(100%)";
});

document.getElementById("image1").addEventListener('mouseleave', (event) => {
    event.target.style.transform = 'scale(1)';
    document.getElementById('image2').style.filter = "grayscale(0%)";
    document.getElementById('image3').style.filter = "grayscale(0%)";
});

document.getElementById("image2").addEventListener('mouseenter', (event) => {
    event.target.style.transform = 'scale(1.1)';
    document.getElementById('image1').style.filter = "grayscale(100%)";
    document.getElementById('image3').style.filter = "grayscale(100%)";
});

document.getElementById("image2").addEventListener('mouseleave', (event) => {
    event.target.style.transform = 'scale(1)';
    document.getElementById('image1').style.filter = "grayscale(0%)";
    document.getElementById('image3').style.filter = "grayscale(0%)";
});

document.getElementById("image3").addEventListener('mouseenter', (event) => {
    event.target.style.transform = 'scale(1.1)';
    document.getElementById('image2').style.filter = "grayscale(100%)";
    document.getElementById('image1').style.filter = "grayscale(100%)";
});

document.getElementById("image3").addEventListener('mouseleave', (event) => {
    event.target.style.transform = 'scale(1)';
    document.getElementById('image2').style.filter = "grayscale(0%)";
    document.getElementById('image1').style.filter = "grayscale(0%)";
});