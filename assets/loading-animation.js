document.addEventListener("DOMContentLoaded", function() {
    const loadingOverlay = document.getElementById('loading-overlay');
    window.addEventListener('load', function() {
        loadingOverlay.classList.add('hidden');
    });
});
