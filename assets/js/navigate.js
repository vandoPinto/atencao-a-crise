/* Menu */
let listMenu = document.querySelectorAll('.nav li');
let sections = listMenu.length;

$('#total_page').html(sections);

$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});

$(window).on('activate.bs.scrollspy', function (e, obj) {
    progressBar(obj.relatedTarget);
});
function progressBar(element) {
    items = getIdSection(element);
    $('#current_page').html(items);
    for (j = items; j <= listMenu.length; j++) {
        $('#menu' + j).removeClass('active');
    }
    for (i = 1; i <= items; i++) {
        $('#menu' + i).addClass('active');
    }
}
function getIdSection(element) {
    return parseInt(element.substr(8));
}

function topScreen() {
    $('html, body').animate({
        scrollTop: parseInt($("#section1").offset().top)
    }, 1000);
}
function bottomScreen() {
    $('html, body').animate({
        scrollTop: parseInt($("#section" + listMenu.length + "").offset().top)
    }, 1000);
}
function upScreen() {
    $('html, body').animate({
        scrollTop: parseInt($("#section" + (items - 1)).offset().top - 70)
    }, 1000);
}
function downScreen() {
    $('html, body').animate({
        scrollTop: parseInt($("#section" + (items + 1)).offset().top - 70)
    }, 1000);
}

$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            // topScreen();
            upScreen();
            break;

        case 38: // up
            upScreen();
            break;

        case 39: // right
            // bottomScreen();
            downScreen();
            break;

        case 40: // down
            // downScreen();
            break;

        default: return;
    }
    // e.preventDefault();
});
$("#btnTop").click(function () {
    topScreen();
});
$("#btnUp").click(function () {
    upScreen();
});
$("#btnDown").click(function () {
    downScreen();
});
