;$(function () {
    'use strict'
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