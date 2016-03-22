window.onload = function () {
    document.forms['login'].onsubmit = function () {
        document.querySelector('main').insertAdjacentHTML(
            'afterend',
            '<div class="popup"><div>You\'re logged in !</div></div>'
        );

        document.querySelector('.popup').onclick = function () {
            this.parentNode.removeChild(this);
        };

        return false;
    };
};