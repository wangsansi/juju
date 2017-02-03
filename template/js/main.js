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
            $(".pre-button").remove();
            $(".next-button").remove();
            appendText()
        }
        else if(winWidth>980) {
            console.log('web');
            $(".media-pre").remove();
            $(".media-next").remove();
        }
    }
    mediaTurning();
    
    var prePage = $('.pre-page')
    var nextPage = $('.next-page')
    prePage.hide();

    function showPrepage (){
        prePage.show(100);
    }
    function hidePrepage (){
        prePage.hide();
    }
    function showNextpage (){
        nextPage.show(100);
    }
    function hideNextpage (){
        nextPage.hide();
    }

    $('.pre-button').hover(showPrepage,hidePrepage);
    $('.next-button').hover(showNextpage,hideNextpage);

    
})