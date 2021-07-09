$(function(){
const secTop = $(".performance").offset().top;
  const secBtm = secTop + $(".performance").outerHeight();

  $(window).scroll(function(){
    const scroll = $(window).scrollTop();
    if(scroll > secBtm){
      $(".header_scroll .headerbox").addClass('active');
      // $(".header_scroll").css( 'background', '#yellow' );
    } else {
      $(".header_scroll .headerbox").removeClass('active');
      // $(".header_scroll").css( 'background', '#black' );
    }
  });








  //Mobile menu icon click
  //1. mobile-menu 클래스에 클릭 이벤트 적용
  $(".dp_menu").on('click', function(){

    //2. mobile-menu 클래스를 클릭했을 때 on 클래스 추가 제거 반복
    $(this).toggleClass("on");

    //3. on 클래스가 있을때와 없을때 분개
    if($(this).hasClass("on")){
      $(this).find("i").attr("class", "fa fa-times");
      //4. 네비게이션 display를 flex로 변경
      //$("#gnb").css("display", "flex");
      //5. 첫 클릭 후 on 클래스 추가 시 gnb가 아래로 내려옴
      $(".dropdown_menu").slideDown(200);
    } else {
      $(this).find("i").attr("class", "fa fa-bars");
      //5. 네비게이션 display를 none으로 변경
      //$("#gnb").css("display", "none");
      //6. 두 번째 클릭 후 on 클래스 제거 시 gnb가 올라감
      $(".dropdown_menu").slideUp(200);
    }
  });
});

const secTop = $("video_content").offset().top;
  const secBtm = secTop + $("video_content").outerHeight();

  $(window).scroll(function(){
    const scroll = $(window).scrollTop();
    if(scroll > secBtm){
      $("header").addClass('active');
    } else {
      $("header").removeClass('active');
    }
  });


