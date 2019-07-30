
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



var button = document.getElementById('hamburger-menu')
var span = button.getElementsByTagName('span')[0];
var collapse = document.getElementsByClassName('nav-collapse')[0]
button.onclick = function (e) {

    if (span.classList.contains('hamburger-menu-button-close')) {

        console.log('fechar')
        closeMenuResponsive()
    } else {
        console.log('abrir')
        openMenuResponsive()

    }
};

function closeMenuResponsive() {
    span.classList.remove('hamburger-menu-button-close');
    collapse.classList.remove("selected");
    overlay.style.display = "none"
}

function openMenuResponsive() {
    span.classList.add('hamburger-menu-button-close');
    collapse.classList.add("selected");
    overlay.style.display = "block";
}


var slider = tns({
    mouseDrag: true,
    controls: false,
    nav: false,
    loop: false,
    container: '.my-slider',
    autoWidth: true
});