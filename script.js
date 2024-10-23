let zoomLevel = 1; // Global variable for zoom level

function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src; // Set the modal image source to the clicked image
    zoomLevel = 1; // Reset zoom level on new image
    modalImg.style.transform = `scale(${zoomLevel})`; // Reset the scale
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none"; // Hide the modal
}

window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const modalImg = document.getElementById("img01");

modalImg.onwheel = function (event) {
    event.preventDefault(); // Prevent scrolling
    if (event.deltaY < 0) {
        zoomLevel += 0.1; // Zoom in
    } else {
        zoomLevel -= 0.1; // Zoom out
    }
    // Set limits for zooming
    if (zoomLevel < 1) zoomLevel = 1; // Minimum zoom level
    if (zoomLevel > 3) zoomLevel = 3; // Maximum zoom level
    modalImg.style.transform = `scale(${zoomLevel})`; // Apply zoom
};
