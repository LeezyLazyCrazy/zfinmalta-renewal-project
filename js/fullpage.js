$(function(){
  $("#fullpage").fullpage({
    fixedElements : '#header',
    verticalCentered:false,
    slideNavigation:true,
    anchors : ['1st', '2nd', '3rd', '4th'],
    afterLoad:function(anchorLink, index){
      if(anchorLink == '1st'){
        $("#header").removeClass('on');
      }
      if(anchorLink == '2nd'){
        $("#header").addClass('on');
      }
      if(anchorLink == '3rd'){
        $("#header").addClass('on');
        //$(".fp-controlArrow fp-prev").text("<");
        //$(".fp-controlArrow fp-next").text(">");
      }
      if(anchorLink == '4th'){
        $("#header").addClass('on');
      }      
    }
  });

  $('.fp-prev').append('<span class="fa fa-angle-left"></span>');
  $('.fp-next').append('<span class="fa fa-angle-right"></span>');
  
});