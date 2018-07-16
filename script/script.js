function showMenu() {
    var x = document.getElementById("Topnavigator");
    if (x.className === "topnav") {
        x.className += " responsive";
        document.getElementById("responsive-meniu").innerHTML = "X";
        $("#aside-menu").appendTo("#Topnavigator");
    } else {
        x.className = "topnav";
        document.getElementById("responsive-meniu").innerHTML = "Meniu";
    }
    var y = document.getElementById("aside-navigator");
    if (y.className === "asidenav") {
        y.className += " responsive";
    } else {
        y.className = "asidenav";
    }
}

function languageDropdown() {
    document.getElementById("dropdown-languages").classList.toggle("showLanguages");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtnLanguages')) {

        var dropdowns = document.getElementsByClassName("dropdown-content-languages");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showLanguages')) {
                openDropdown.classList.remove('showLanguages');
            }
        }
    }
};

function menuShowing(){
    if ( $(window).width() > 740) {   
        $("#aside-menu").appendTo("#nav-aside");
    } 
    else{
        $("#aside-menu").appendTo("#Topnavigator");
    }
}