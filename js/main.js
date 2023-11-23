// const scrollUp = document.querySelector('.scrollUp');
// window.addEventListener('scroll', () => {
//     if (window.pageYOffset > 100) {
//         scrollUp.classList.add("active");

//     } else {
//         scrollUp.classList.remove("active");
//     }
// });
// open mobile menu 
$(function () {
    // $(".header_btn_menu").on("click", function () {
    //   $(".header_right_menu").slideToggle();
    //   $(".header_right_menu").toggleClass('active');
    //   $("body").toggleClass('body_position');
    // });

    $(".header_btn_menu").click(function () {
        $(".header_right_menu").toggleClass('active');
        $(".header_right_menu").siblings().removeClass('active');
        $("body").toggleClass('body_position');
    });

    // $(".header_right_menu ul").niceScroll({
    //     cursorcolor: "#000", 
    //     cursorwidth: "8px",
    //     cursorborder: "1px solid #000", 
    //     cursorborderradius: "5px",
    //     zindex: "9999", 
    //     scrollspeed: 10, 
    //     mousescrollstep: 10
    // });
});
