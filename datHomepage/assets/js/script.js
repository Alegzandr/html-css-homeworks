window.onload = function () {
    // Dynamic margin top of the fifth section of main
    function sectionMargin() {
        var sectionFix = document.querySelector('main > section:nth-child(5)');
        sectionFix.style.marginTop = -(sectionFix.clientHeight) + 'px';
    }

    sectionMargin();

    window.onresize = sectionMargin;

    // Avoid refreshing of forms
    var forms = document.forms;
    for (var j in forms) {
        forms[j].onsubmit = function () {
            return false;
        };
    }
};
