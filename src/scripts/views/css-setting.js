// App Bar While Window On Scrolling
const mainBottomNav = $('header').offset().top + $('main').height();

$(window).on('scroll', () => {
    const stop = Math.round($(window).scrollTop());

    if (stop > mainBottomNav) {
        $('app-bar').addClass('scroll');
    } else {
        $('app-bar').removeClass('scroll');
    }
});
