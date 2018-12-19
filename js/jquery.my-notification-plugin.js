(function($) {

    $.notification = function(options) {

        // Establish default settings of plugin
        var settings = $.extend({
            state         : 'error',
            message       : 'something went wrong',
            position      : 0, //position 0 is top and 100 is bottom. Any value between will position the notification relative to the screen height
            width         : 100, // value determines the % of width of the notification container with respect to screen width
            overlay       : true, // whether to show an overlay or not
            button        : false, //to add button in the popup
            btnValue      : 'default', //to add value of button in the popup
            buttonCallBack: function() {} //for the callback function of button in the popup
        }, options);

        var content = init(); // initializes default values
        content = content+"<p>"+settings.message+"</p>";
        if(settings.button){
          content = content+"<button id='btnCookie'>"+settings.btnValue+"</button>";
        }

        var position = settings.position;
        $(".my-notification-popup").html(content);

        if(settings.overlay){
            $('body').append("<div class='my-notification-overlay'><div/>");
        }

        $(".my-notification-popup").addClass('notify notify-'+settings.state+' active');
        $(".my-notification-popup").css( {"width": settings.width +'%'});

        if (position > $(".my-notification-popup").outerHeight(true)){
            position = getPosition(settings.position);
        }
        $(".my-notification-popup").css( {"top": position+'px'});

        $(".my-notification-close").on("click", function(){
            $(".my-notification-popup").removeClass().addClass("my-notification-popup"); //Removes all class except popup overlay
            $(".container").removeClass("my-notification-overlay");
            $(".my-notification-overlay").remove();
        });
        if(settings.button){
          initCallback(settings.buttonCallBack);
        }
    }

})(jQuery);

function init(){
    $(".my-notification-popup").removeClass().addClass("my-notification-popup"); //Reset all class previously applied except popup overlay
    if($(".my-notification-overlay")) {
        $(".my-notification-overlay").remove();//reset the overlay in case notification is not closed using close button
    }
    return "<button class='my-notification-close'><i class='fa fa-times' aria-hidden='true'></i></button>"; //Adding default content

}

function getPosition (position){
    var postionInPx = Math.round(window.innerHeight / (100 / position)); //Converitng a 0 to 100 range of position to pixel w.r.t window height
    postionInPx = postionInPx - $(".my-notification-popup").outerHeight(true);
    return postionInPx;
}

function initCallback(callBack){
  $("#btnCookie").on("click", function(){
    callBack.call( );
  });
}
