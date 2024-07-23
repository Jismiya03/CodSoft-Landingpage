
function toggleMenu() {
    var popupMenu = document.getElementById("popupMenu");
    if (popupMenu.style.display === "block") {
        popupMenu.style.display = "none";
    } else {
        popupMenu.style.display = "block";
    }
}

function hideMenu() {
    document.getElementById("popupMenu").style.display = "none";
}
