/*ScrollSpy js simple
   ================================================ */

(function ($) {
    "use strict";
//get Anchor link, create array
    var anchorLink = Array();
    $('section, body').each(function (i) {
        let id = $(this).attr('id');
        if (id) {
            anchorLink.push(id);
        }
    });

    function scrollSpy() {
        let current;
        for (let i = 0; i < anchorLink.length; i++) {
            if ($('#' + anchorLink[i]).offset().top - 110 <= $(window).scrollTop()) {
                current = anchorLink[i];
            }
        }
        $("nav a[href='#" + current + "'] , .menu-sidebar a[href='#" + current + "']").addClass('active');
        $("nav a, .menu-sidebar a").not("a[href='#" + current + "']").removeClass('active');
    }

//scrollSpy call
    $(document).ready(function () {
        scrollSpy();
    });

    $(window).on('scroll', function () {
        scrollSpy();
    });

})(jQuery);
