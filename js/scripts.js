$(document).ready(function () {
    $('.card-content+.card-content').hide();
    $('.card-tabs__link').first().addClass('active');

    $('.card-tabs__link').on('click' , function (e) {
        e.preventDefault();
        $('.card-content').hide();
        $('.card-tabs__link').removeClass('active');
        $ ($(this).attr('href')).fadeIn();
        $(this).addClass('active');
    })
});