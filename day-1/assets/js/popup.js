$(function () {
    $('form[name="login"]').submit(function (e) {
        e.preventDefault();

        if (!$('.popup').length) {
            $('main').after('<div class="popup"><div>You are logged in !</div></div>');
        }
        $('.popup > div').css({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#cecece',
            padding: '40px'
        });
        $('.popup').css({
            display: 'none',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, .7)',
            position: 'relative'
        }).fadeIn(1000);

        $('body').click(function () {
            $('.popup').fadeOut(1000);
        });
    });
});
