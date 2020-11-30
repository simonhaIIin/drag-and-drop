let movable = document.querySelector(".movable-cube");
let offsetX = 0;
let offsetY = 0;

movable.addEventListener("mousedown", function(event) {
    offsetX = event.pageX - movable.style.left.replace('px', '');
    offsetY = event.pageY - movable.style.top.replace('px', '');
    movable.addEventListener("mousemove", drag);  
});

movable.addEventListener("mouseup", function() {
    movable.removeEventListener("mousemove", drag);
});

movable.addEventListener("mouseleave", function() {
    movable.removeEventListener("mousemove", drag);
});

function drag(event) {
    movable.style.left = event.pageX - offsetX + "px";
    movable.style.top = event.pageY - offsetY + "px";
}