$(function() {
    /* navbar scroll  */
    $(".navbar-nav .nav-item .nav-link , .start-button").click(function() {
        $("html , body").animate({
                scrollTop: $("#" + $(this).data("value")).offset().top,
            },
            1000
        );
    });

    /* portfolio filter */
    $(".list").click(function() {
        const value = $(this).attr("data-filter");
        console.log(value);
        if (value == "All") {
            $(".project-imgs").show("1000");
        } else {
            $(".project-imgs")
                .not("." + value)
                .hide("1000");

            $(".project-imgs")
                .filter("." + value)
                .show("1000");
        }
    });

    $(".team a").click(function($e) {
        $e.preventDefault();
    });

    /* contact section send data */
    $(".Send-button").click(function($e) {
        $e.preventDefault();
        if ($(".form-control").val() == "") {
            $(".form-control").css("outline", "1px solid red");
        }
    });

    $("#name ,#email ,#subject ,#message").keydown(function() {
        $(this).css("outline", "none");
    });

    /* back to  top  */
    $("#back-button").click(function() {
        $("html, body").animate({
                scrollTop: 0,
            },
            1000
        );
    });
});