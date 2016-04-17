window.onload = function () {
    function sectionMargin() {
        var sectionFix = document.querySelector('main > section:nth-child(5)');
        sectionFix.style.marginTop = -(sectionFix.clientHeight) + 'px';
    }

    sectionMargin();

    window.onresize = sectionMargin;
};
