
var subMenu = document.getElementsByClassName("sub-menu")[0];
var dropdown = document.getElementsByClassName("nav-item-dropdown")[0]
var overlay = document.getElementsByClassName("overlay")[0]

//Retorna uma lista de elementos presentes no documento
var dropdownToggle = document.getElementsByClassName("nav-item-dropdown-toggle")[0];

dropdownToggle.onclick = function () {
    //contem a classe selected, então fecho o dropdown
    if (subMenu.classList.contains('selected')) {
        close()
    } else {
        open()
    }
}

function close() {
    subMenu.classList.remove("selected");
    dropdown.classList.remove("selected");
    overlay.style.display = "none"
}

function open() {
    subMenu.classList.add("selected");
    dropdown.classList.add("selected");
    overlay.style.display = "block";
}