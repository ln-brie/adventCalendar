$(document).ready(function () {
    var currentDate = new Date() ;
    $("div.jour").each(function(index, val){
        if (($(this).children("h1").text() > currentDate.getDate())/* || (currentDate.getMonth() !== 11)*/) {
            $(this).css({
                "color": "grey",
                "background-color": "rgba(121, 120, 120, 0.151)",
                "cursor": "default"
            });
        } else {
            $(this).click(function() {
                $(this).children('p').css('display', 'block');
                $(this).addClass('pop');
            })
        }
    })
    
});