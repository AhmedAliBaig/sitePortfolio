

$(window).resize(function () {
    setMainMenuHeight();
});


function setMainMenuHeight() {

    var y = $(window).height() - 55;

    $(".main-menu").css("height", y);
}

$(document).ready(function () {
    setMainMenuHeight();
});

//Logo click function

function returntohomepage() {
    location.href = "_Layout-PMCL-GettingStarted.html";
}

//Logout Function

function logout() {
    location.href = "_Layout-PMCL-Index.html";
}

//Hamburger Toggle Function

function togglemenu() {

    if ($(".main-menu").hasClass("collapse")) {

        setTimeout(function () {
            $(".main-menu").removeClass("collapse");
        }, 200);

        $(".content-area").removeClass("expanded");

    }

    else {

        setTimeout(function () {
            $(".content-area").addClass("expanded");
        }, 200);

        $(".main-menu").addClass("collapse");


    }
}

