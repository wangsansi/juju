;$(function () {
    'use strict'
    var winWidth;
    function mediaTurning(){
        if (window.innerWidth)
        winWidth = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth;
        if(winWidth<=980) {
            console.log('phone');
            $(".pre-one").remove();
            $(".next-one").remove();
        }
        else if(winWidth>980) {
            console.log('web');
            $(".media-pre-one").remove();
            $(".media-next-one").remove();
        }
    }
    mediaTurning();

    
})