$(function(){

  //Header stick to top when scrolling down
  const headerSticky = function(){
    // 요소의 위치 좌표를 브라우저(문서)를 기준으로 읽기
    //$("선택자").offset();
    //$("선택자").offset().top;
    //$("선택자").offset().left;

    //3. header 요소의 위쪽 끝 값 읽어서 저장
    const headerTop = $(".header_scroll").offset().top;
    //console.log(headerTop);

    //2. 스크롤 이벤트 함수 작성
    $(window).on('scroll', function(){
      //1. 브라우저의 맨 위쪽 값 변수에 저장
      const winTop = $(window).scrollTop();
      //console.log(winTop);
      
      //4. winTop 값이 headerTop보다 같거나 클때 sticky 클래스 추가 및 제거
      if(winTop >= headerTop){
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
  }

  headerSticky();

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


// //1.뭘 바꿔야되냐'
// '
// 메뉴버튼 menu=document.querySelector('.메뉴');
// X버튼'
// 메뉴드롭다운
// console.log(sdfsf);
// //2.바꿀려면 무슨 조건이 필요하냐'
// '메뉴버튼을 눌렀을때 : X버튼이 나타남 / 메뉴 드롭다운
// X버튼 눌렀을 때 : 메뉴버튼 나타남/ 메뉴 사라짐
// //3.'

// function clickEvt(){
//   if()
// }

// menu.addEventListener("click",function(){
//   if(){
//  메뉴버튼을 없애고 = X버튼을 나타낸다
//  메뉴 드롭다운 실행
//   }
// });