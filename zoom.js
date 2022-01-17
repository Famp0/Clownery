$(document).ready(function(){
    
    var scale = DynamicZoom();
    
    document.body.style.webkitTransform =  scale;    // Chrome, Opera, Safari
    document.body.style.msTransform =   scale;       // IE 9
    document.body.style.transform = scale;     // Geral

    console.log(scale);
})

function DynamicZoom (){
    
    if(window.screen.width < 800)
        return ((window.screen.width * 100)/800);
    
    else
        return 1.0;
}