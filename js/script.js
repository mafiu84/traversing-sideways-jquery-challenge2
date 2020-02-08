//waits until page is ready
$(document).ready(function() {
    $("img").click(function() {
        $(this).next().children("p").slideDown("slow");
        });

    }); 

