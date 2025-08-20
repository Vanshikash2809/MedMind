// JavaScript to handle button click
document.addEventListener("DOMContentLoaded", function() {
    const featureButton = document.querySelector('.btn-primary');

    featureButton.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default behavior
        alert('Exploring features coming soon!');
    });
});