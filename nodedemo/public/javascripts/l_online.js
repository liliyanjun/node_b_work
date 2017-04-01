window.onload = function(){
	var on = true;
	var flag = 0;
	$('#l_btn_phone').click(function(){
    alert(1)
		if(on == true && flag==0){
			$('.l_nav_lists').animate({ 
			    height: "430px"
			}, 300 );
			$('.l_nav_lists').css({ 
			  backgroundColor:'#f5f5f5'
			});
			$('.l_apps_hover').css({ 
			  backgroundColor:'#f5f5f5'
			});
			$(".l_nav_lists").css('box-shadow',"0 1px 0 rgba(0,0,0,.1) inset,0 2px 8px rgba(0,0,0,.16)")
			return flag=1;
		}else{
			$('.l_nav_lists').animate({ 
			    height: "90px",
			}, 300 );
			$('.l_nav_lists').css({ 
			 backgroundColor:'#ededed'
			});
			$('.l_apps_hover').css({ 
			 backgroundColor:'#ededed'
			});
			$(".l_nav_lists").css('box-shadow',"0 0 0 0")
			  return flag=0;
		}
	})
	
  $("#bg").mouseenter(function() {
    var thisPX = $(this).offset().left;
    var thisPY = $(this).offset().top;
    var boxWidth = $(this).outerWidth();
    var boxHeight = $(this).outerHeight();
    $(this).addClass("threeD");
    $(".threeD").mousemove(function(event) {
      var mouseX = event.pageX - thisPX;
      var mouseY = event.pageY - thisPY;
      var X;
      var Y;
      if (mouseX > boxWidth / 4) {
        X = mouseX - boxWidth/4;
      } else {
        X = mouseX - boxWidth/4;
      }
      if (mouseY > boxHeight / 4) {
        Y = boxHeight/4 - mouseY;
      } else {
        Y = boxHeight/4 - mouseY;
      }
      $(".threeD").css({
        "-webkit-transform": "rotateY(" + X / 180 + "deg) " + "rotateX(" + Y / 180 + "deg)"
      });
    });
  });
  $("#bg").mouseleave(function() {
    $(this).removeClass("threeD");
    $(this).css({
      "-webkit-transform": "rotateY(0deg) rotateX(0deg)"
    });
  });
	
	$("#bg2").mouseenter(function() {
    var thisPX = $(this).offset().left;
    var thisPY = $(this).offset().top;
    var boxWidth = $(this).outerWidth();
    var boxHeight = $(this).outerHeight();
    $(this).addClass("threeD");
    $(".threeD").mousemove(function(event) {
      var mouseX = event.pageX - thisPX;
      var mouseY = event.pageY - thisPY;
      var X;
      var Y;
      if (mouseX > boxWidth / 4) {
        X = mouseX - boxWidth/4;
      } else {
        X = mouseX - boxWidth/4;
      }
      if (mouseY > boxHeight / 4) {
        Y = boxHeight/4 - mouseY;
      } else {
        Y = boxHeight/4 - mouseY;
      }
      $(".threeD").css({
        "-webkit-transform": "rotateY(" + X / 180 + "deg) " + "rotateX(" + Y / 180 + "deg)"
      });
    });
  });
  $("#bg2").mouseleave(function() {
    $(this).removeClass("threeD");
    $(this).css({
      "-webkit-transform": "rotateY(0deg) rotateX(0deg)"
    });
  });
	
	$("#bg3").mouseenter(function() {
    var thisPX = $(this).offset().left;
    var thisPY = $(this).offset().top;
    var boxWidth = $(this).outerWidth();
    var boxHeight = $(this).outerHeight();
    $(this).addClass("threeD");
    $(".threeD").mousemove(function(event) {
      var mouseX = event.pageX - thisPX;
      var mouseY = event.pageY - thisPY;
      var X;
      var Y;
      if (mouseX > boxWidth / 4) {
        X = mouseX - boxWidth/4;
      } else {
        X = mouseX - boxWidth/4;
      }
      if (mouseY > boxHeight / 4) {
        Y = boxHeight/4 - mouseY;
      } else {
        Y = boxHeight/4 - mouseY;
      }
      $(".threeD").css({
        "-webkit-transform": "rotateY(" + X / 180 + "deg) " + "rotateX(" + Y / 180 + "deg)"
      });
    });
  });
  
  $("#bg3").mouseleave(function() {
    $(this).removeClass("threeD");
    $(this).css({
      "-webkit-transform": "rotateY(0deg) rotateX(0deg)"
    });
  });
  
  	
  	$('.l_hot_pics_one > li').hover(function(){
  		$(this).find('.l_find').toggle();
  		$(this).find('.l_hid_price').toggle();
	})
  	
  	$('.l_hot_pics > li').hover(function(){
  		$(this).find('.l_find').toggle();
  		$(this).find('.l_hid_price').toggle();
	})
  	$('.l_hot_pics_last > li').hover(function(){
  		$(this).find('.l_find').toggle();
  		$(this).find('.l_hid_price').toggle();
	})
  	$('.l_hot_pics_two > li').hover(function(){
  		$(this).find('.l_find').toggle();
  		$(this).find('.l_hid_price').toggle();
	})
  	$('.l_active_box > l_erji_pics').hover(function(){
  		$(this).find('.l_find').toggle();
  		$(this).find('.l_hid_price').toggle();
	})
}


