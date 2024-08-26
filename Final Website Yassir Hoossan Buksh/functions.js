var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var Mcontainer = document.getElementsByClassName("masthead-container");
    for(var i = 0; i < Mcontainer.length; i++){
            if (prevScrollpos > currentScrollPos) {
            Mcontainer[i].style.top = "0";
            } else {
            Mcontainer[i].style.top = "-70px";
            }
            prevScrollpos = currentScrollPos;
        }
    }
