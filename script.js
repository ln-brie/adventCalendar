$(document).ready(function () {
    var currentDate = new Date() ;
    $("div.jour").each(function(index, val){
        if (($(this).children("h1").text() > currentDate.getDate()) || (currentDate.getMonth() !== 11)) {
            $(this).css({
                "color": "grey",
                "background-color": "rgba(121, 120, 120, 0.151)",
                "cursor": "default"
            });
        } else {
            $(this).click(function() {
                $(this).children('img').addClass('pop').show();
                $('#fermer').show();
            });
        }
        $('#fermer').click(function() {
            $('div.jour').children('img').removeClass('pop').hide();
            $(this).hide();
        });
    });
    
});