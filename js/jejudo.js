
$(function(){
     $(".menu>a").hover(
        function(){
            $(this).next("ul").stop().slideDown();},
            function(){
                if( $(this).next("ul").is(':hover') === false)
                $(this).next("ul").stop().slideUp('fast');
            }
        );
 
        $(".menu ul").mouseleave(function() {
            // if($('.menu ul').is(':hover') === false)
            $(".menu ul").stop().slideUp('fast');
        });
        //   $(".menu>a").mouseleave(function(){
        //     $("ul").slideUp();
        //   });
         
    // $(".menu>a").hover(function(){
    //     $(".menu:not(:animated)",this).slideDown();
    //     $(".menu ul").slideDown();
    // },
    // function(){
    //     $(".menu",this).slideUp();
    // });
    AOS.init();

    // $("#visaul_wrap ul li").hide();
    // $("#visual_wrap ul li").first().show();

    // setInterval(function(){
       
    //     $("#visual_wrap ul").append($("#visual_wrap ul li").first());
    //     $("#visual_wrap ul li").last().hide();
    //     $("#visual_wrap ul li").first().fadeIn();
       
      
       

    // },2000);



    
    $("#visaul_wrap ul li").hide();
    $("#visual_wrap ul li").first().show();


    var i = 0;
    setInterval(function(){
        if(i < $("#visual_wrap ul li").length - 1) {
            i++;
        } else {
            i = 0;
        }
        $("#visual_wrap ul li").eq(i).siblings().fadeOut();
        $("#visual_wrap ul li").eq(i).fadeIn();

    }, 2000);





    // var $menu = $(".floating_menu div.menu"),
    //     $contents = $(".section"),
    //     $doc = $("html, body");
    //     // $contents2 =  $(".section_b") ;

    // $menu.on("click", "a", function(){
    // //   var $target2 = $(this).parent(),
    // //        idx2 = $target2.index(),
    // //        section2 = $contents2.eq(idx2);   
        
    //     var $target = $(this).parent(),  
    //         idx = $target.index(),     
    //         section = $contents.eq(idx),    
    //         offsetTop = section.offset().top;
            
           
    //     //  $doc.animate({
    //     //         scrollTop : section2.offset().top
                
    //     //     }, 1000);

    //     $doc.animate({
    //         scrollTop : section.offset().top,
            
    //     }, 1000);

    // });
    $(".menu a").click(function(){
        $("html, body").animate({
            scrollTop : $(this.hash).offset().top
        },1000)
    });
    $(".fix_menu a").click(function(){
        $("html, body").animate({
            scrollTop : $(this.hash).offset().top
        },1000)
    });

  // -----------------------
  var $menu = $(".floating_menu2 li.fix_menu"),
  $contents = $(".section_v"),
  $doc = $("html, body");
// 제이쿼리에서 요소를 선택해서 담는 변수명 앞에는 $를 붙여서 스크립트 용도의 변수와 구분을 한다.


// 해당 섹션으로 스크롤 이동하는 이벤트
$menu.on("click", "a", function(){
  // 메뉴에 클릭이벤트가 일어났을때 (a태그 범위 안에서)
  // $menu.find("a").click()와 같음!

  var $target = $(this).parent(), // 클릭한 앵커태그의 부모요소인 li(ex: 메뉴1 a태그의 부모 li)
      idx = $target.index(),      // 클릭한 li의 인덱스번호(ex: 메뉴1을 클릭하면 idx = 0)
      section = $contents.eq(idx),    // idx에 저장된 인덱스번호로 선택. 섹션 중 인덱스번호가 idx와 일치는 것을 선택(ex: 0번째 섹션)
      offsetTop = section.offset().top;   // 클릭한(선택한) 섹션의 offset 높이값

  $doc.animate({
      scrollTop : offsetTop
      // 스크롤위치를 클릭한 앵커태그를 통해 가지고온 섹션의 offset 높이값으로 이동시킨다.
  }, 1000);

});

// 메뉴에 불 켜기
$(window).scroll(function(){

  var sclTop = $(window).scrollTop();
  // 브라우저의 스크롤 값을 가져옴

  $.each( $contents, function(idx, item){

      // $(선택자).each(function(){});
      // $.each( $(선택자), function(매개변수1, 매개변수2){} );
      // 매개변수1 : 배열에 저장된 인덱스 값
      // 매개변수2 : 배열에 저장된 객체

      var $target = $contents.eq(idx),
      // 각각의 섹션의 인덱스값을 통해 섹션을 선택(ex: 0번째)
          i = $target.index(),
          // 해당 섹션의 인덱스값을 저장(ex: 0)
          targetTop = $target.offset().top;
          // 해당 섹션의 offest 높이값(ex: 0번 섹션의 offset 높이값)

      if( targetTop <= sclTop ) {
          // 해당 섹션의 offset 높이값이 스크롤위치값보다 작으면(스크롤이 섹션의 위쪽을 통과할 때)

          $menu.removeClass("on");    // 모든 메뉴에 on 클래스 삭제
          $menu.eq(idx).addClass("on");   // 해당 idx 값과 일치하는 인덱스 요소 메뉴에 on 클래스 붙임

      }

      if( !(200 <= sclTop) ) {
          // sclTop(스크롤 높이값)이 200보다 크거나 같지 않으면(맨 위에 갔을 때)

          $menu.removeClass("on");
          // 메뉴에 불 끄기
      }


  } );


});
       
 // 아래로 스크롤시 헤더 가려짐
 var lastScrollTop = 0;
 var delta = 5;  // 동작의 구현이 시작되는 위치 초기값 설정.
 var headerHeight = $("header").outerHeight();   // 헤더의 높이
 var didScroll;  // 추후 사용을 위한 변수 설정

//  function scrollShow(){
//     $(window).scroll(function(){

//         // didScroll = true;
   
//         $(".fadeInLeft").show(function(){
   
//             var bottomOfElement = $(this).offset().top+ $(this).outerHeight() ;
   
//             var bottomOfWindow = $(window).scrollTop() + $(window).height();
             
//             var TopOfElement = $(this).offset().top
//             var TopOfWindow = $(window).scrollTop() + $(window).height();
//             if( bottomOfWindow > bottomOfElement ) {
       
//                 $(this).animate({
//                     opacity: 1,
//                     marginLeft: 0
//                 }, 1500);
//                $(".fadeInLeft.map").addClass("opa");
//             }
            
//             //  if( $(this).offset().top < bottomOfElement ){
//             //     $(this).animate({
//             //         opacity: 0,
//             //         marginLeft: -300
//             //     }, 1500);
//             // }
               
//         //    console.log(bottomOfElement);
//         //    console.log(bottomOfWindow);
   
//         });     
   
//     });

//  };
// scrollShow();




	$("#top_btn").hide(); // 탑 버튼 숨김 	
	
		$(window).scroll(function () {
			if ($(this).scrollTop() > 800) { // 스크롤 내릴 표시
				$('#top_btn').fadeIn();
			}else {
				$('#top_btn').fadeOut();
			}
		});     
		$('#top_btn').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);  // 탑 이동 스크롤 속도
				return false;
		});
        
    $(".floating_menu2").hide(); // 탑 버튼 숨김 	
	
		$(window).scroll(function () {
			if ($(this).scrollTop() > 500) { // 스크롤 내릴 표시
				$('.floating_menu2').fadeIn();
			}else {
				$('.floating_menu2').fadeOut();
			}
		});     
	
	
	

 
//  $("#top_btn").click(function(){
//    return scrollShow();
//     // $(".fadeInLeft").animate({
//     //     opacity: 0,
//     //     marginLeft: -300
//     // }, 1500);
//  });

 

//  setInterval(function(){
     
//      if(didScroll) {

//         //  hasScrolled();
        
//          didScroll = false;

//      }

//  }, 300);


});



