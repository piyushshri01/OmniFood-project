$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction){
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        } 
    } ,{
        offset: '5px'
    });

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    },{
        offset: '50%'
    });

    // mobile navigation
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');

        nav.slideToggle(200);
    });

});


// var waypoints = $('#handler-first').waypoint(function(direction) {
//     notify(this.element.id + ' hit 25% from top of window') 
//   }, {
//     offset: '25%'
//   })




// const head = document.querySelector('.hero-text-box').addEventListener('click', colChange(e));

// function colChange(e) {
//     head.style.color= 'red';
//     e.preventDefault();
// }