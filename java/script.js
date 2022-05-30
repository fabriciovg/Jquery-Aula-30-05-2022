/*var num=0;

$(document).ready(function(){

$("div").scroll(function(){

$("p").text(num+=1);
});
});

$(document).ready(function(){

    $("div p").first().css({"border":"1px solid grey","background-color":"#ffa"});
    $("div p").eq(1).css({"border":"1px solid #000","background-color":"#aaf"});
    $("div p").last().css({"border":"1px solid #a00","background-color":"#afa"});

    });


$(document).ready(function(){

    $("#bt1").click(function(){
    
    $("#caixa").animate({height:"400px"})
    
    .animate({width: "300px"});
    
    });
    
    $("#bt2").click(function(){
    
    $("#caixa").animate({width:"100px"})
    
    .animate({height:"100px"});
    
    });
    
    });  

*/

$(document).ready(function(){

    $("#bt1").click(function(){

$("#caixa").animate({width:"400px"})

.animate({height:"400px"})

.animate({opacity:"0.3"})

.animate({opacity:"1"})

.animate({height:"100px"})

.animate({width:"100px"});

});

});