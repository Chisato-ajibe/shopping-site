$(function(){
    $(".menu-list").css("display","none");
    $("#menu").on("click", function() {
        $(".menu-list").slideToggle();
    });
});

var arrow = [
    'img/top/next_icon.png',
    'img/top/down_icon.png'
  ];
var arrow_count = 0;

$(document).ready(function(){
  
  $('#arrow').attr('src',arrow[arrow_count]);
  
  $("#page-link").click(function(){
    $(".toggle1").slideToggle();
    
    if (arrow_count == arrow.length - 1){
      arrow_count = 0;
    } else {
      arrow_count++;
    }
    $('#arrow').attr('src',arrow[arrow_count]);
    
  });
});

var arrowB = [
    'img/top/next_icon.png',
    'img/top/down_icon.png'
  ];
var arrow_countB = 0;

$(document).ready(function(){
  
   $('#arrow2').attr('src',arrowB[arrow_countB]);
  
  $("#category").click(function(){
    $(".toggle2").slideToggle();
    
    if (arrow_countB == arrowB.length - 1){
      arrow_countB = 0;
    } else {
      arrow_countB++;
    }
    $('#arrow2').attr('src',arrowB[arrow_countB]);
    
  });
});