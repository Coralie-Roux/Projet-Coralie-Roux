document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll('.anim-title');
    elementsToAnimate.forEach(function(element, index) {
        setTimeout(function() {
            element.style.opacity = 1;
        }, 1000 * index);
    });
});