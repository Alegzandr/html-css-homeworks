$(function () {
    function ajaxForm(name) {
        $('form[name="' + name + '"]').submit(function () {
            return false;
        });
    }

    $('input[type="email"]').click(function () {
        $(this).next('input[type="submit"]').css({backgroundColor: '#a3bfb8'});
    });

    ajaxForm('newsletter');
    ajaxForm('newletter-footer');
});
