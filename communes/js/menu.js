// filtres menu
function filtresFunction() {
    var filtresVar = document.getElementById("filtresDiv");
    var infosVar = document.getElementById("infosDiv"); // masquer autre bouton si actif
    var themesVar = document.getElementById("themesDiv");
    if (filtresVar.style.display === "block") {
        filtresVar.style.display = "none";
    } else {
        filtresVar.style.display = "block";
        infosVar.style.display = "none"; // masquer autre bouton si actif
        themesVar.style.display = "none"; // masquer autre bouton si actif
    }
}
// infos-legendes menu
function infosFunction() {
    var infosVar = document.getElementById("infosDiv");
    var filtresVar = document.getElementById("filtresDiv"); // masquer autre bouton si actif
    var themesVar = document.getElementById("themesDiv");
    if (infosVar.style.display === "block") {
        infosVar.style.display = "none";
    } else {
        infosVar.style.display = "block";
        filtresVar.style.display = "none"; // masquer autre bouton si actif
        themesVar.style.display = "none"; // masquer autre bouton si actif
    }
}
// filtres menu
function themesFunction() {
    var themesVar = document.getElementById("themesDiv");
    var filtresVar = document.getElementById("filtresDiv");
    var infosVar = document.getElementById("infosDiv"); // masquer autre bouton si actif
    if (themesVar.style.display === "block") {
        themesVar.style.display = "none";
    } else {
        themesVar.style.display = "block";
        filtresVar.style.display = "none"; // masquer autre bouton si actif
        infosVar.style.display = "none"; // masquer autre bouton si actif
    }
}
// accordion
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
