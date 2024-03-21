const menubar=document.getElementById("menu");
const navbar=document.getElementById("nav-bar");
menubar.addEventListener("click",() => {
    if(navbar?.className == "hidden"){
        navbar?.classList.remove("hidden");
    }
    else{
        navbar?.classList.add("hidden");
    }

});
