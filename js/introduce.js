$(function(){
    $("#name2>a").click(function(){
        $("html, body").animate({
            scrollTop : $(this.hash).offset().top
        },1000)
    });
  


});