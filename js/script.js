$(document).ready(function(){

    setInterval(function(){
        var $pause = $("#banner >div").hasClass("pause"); 
        if($pause == false){
            var $fchild=$("#banner .slider > div").first();

            $("#banner .slider").stop().animate({"margin-left":"-100%"},500,function(){
                $("#banner .slider").append($fchild).css("margin","0%");
                
                
            });
        }
    },3000);
    $("#banner .slider").hover(function(){
        $(this).addClass("pause");
    }, function(){
        $(this).removeClass("pause");
    });

    $("#category .wrap .bottom .btn >li").click(function(){
        var $index=(this).index();
        $("#category .wrap .bottom .btn >li").removeClass("active");
        $(this).addClass("active");
        return false;
    });
});
