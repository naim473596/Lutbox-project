// windeow scroll top-meno change start
let top_meno = document.querySelector("#top_meno"); 
window.onscroll = function(){
    let SCROLL = window.scrollY;
    if(SCROLL >= 1){
        top_meno.classList.add("new_top_meno")
    }else{
        top_meno.classList.remove("new_top_meno")
    }
 }
 // windeow scroll top-meno change end