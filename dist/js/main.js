//Retorna uma lista de elementos presentes no documento
var allHasChildren = document.querySelectorAll(".collapse a");
console.log(allHasChildren)
for (var x = 0; x < allHasChildren.length; x++) {
    allHasChildren[x].onclick = function() {
        var subMenu = this.parentNode.getElementsByClassName("sub-menu")[0];
        
        if (subMenu.classList.contains('selected')) {
            subMenu.classList.remove("selected");
            document.getElementsByClassName("overlay")[0].style.display="none"
            
        } else {
            subMenu.classList.add("selected");
            document.getElementsByClassName("overlay")[0].style.display="block";
        }
    }
}