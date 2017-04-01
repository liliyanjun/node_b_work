$(function(){
function slide(obj,delay,speed){
	var theInt = null;
	var i=p=0;
	var html="";
	var $imgs=$(obj).find("ul");
	var num=$imgs.find("li").size();
	var state=true;
	for(i=0;i<num;i++){
		html+=("<span></span>");
	}
	$('.pagina').html(html);
	var $ctrs=$(obj).find(".pagina");

	//点击切换
	$ctrs.find("span").each(function(i){
		$(this).click(function(){
			if(!$(this).hasClass("cur")){
				slide_state(i);
			}
		});
	});
	$('.arrow-left').click(function(){
		if(state){
			state=false;
			p--;
			if(p<0){
				p=num-1;
			}
			slide_state(p);
		}
	});
	$('.arrow-right').click(function(){
		if(state){
			state=false;
			p++;
			if(p>=num){
				p=0;
			}
			slide_state(p);
		}
	});
	//自动播放
	auto_play=function(p){
		clearTimeout(theInt);
		theInt=setTimeout(function(){
			p++;
			if(p>=num){
				p=0;
			}
			slide_state(p);
		},delay);
	}
	//当前状态
	slide_state=function(num){
		$imgs.find("li").fadeOut(speed).removeClass('cur').eq(num).fadeIn(speed,function(){$(this).addClass('cur');state=true});
		$ctrs.find("span").removeClass("cur").eq(num).addClass("cur");
		auto_play(num);
	}
	//初始化
	slide_state(p);
}

var init={
	pc: function (){
		slide(".imgs",5000,1000);
		Reset();
		$(window).resize(function(){
			Reset();
		});
		function Reset(){
			$('.imgs ul img').each(function(){
				cutimg(this, '.imgs ul');
			});
			$('.wrap a img').each(function(){
				cutimg(this);
			});
		}

		$('.wrap ul li a').hover(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		});
	},
}

var commonFun = {
	tab: function(str){
		var container = $(str.container),
			trigger = container.find(str.trigger),
			cont = container.find(str.cont);
		$.each(trigger, function (index) {
			$(this).click(function(){
				trigger.removeClass('cur').eq(index).addClass('cur');
				cont.hide().eq(index).show();
			});
		});
	},
	grid: function(){
		var gridCont = $('.module-grid').eq(1).children('.module-grid-cont');
		var gridContHeight = gridCont.height();
		$('.more').click(function(){
			$(this).toggleClass('cur').not('.cur').html('展开更多信息<span class="more-icon"><i class="icon icon-down-g"></i></span>').end().filter('.cur').html('收起<span class="more-icon"><i class="icon icon-down-g"></i></span>')
			if(!$(this).hasClass('cur')){
				$('html,body').animate({scrollTop: $(window).scrollTop()-gridCont.height()+gridContHeight},300);
				if($(window).width()>768){
					gridCont.animate({height: '172px'},300);
				}else{
					gridCont.animate({height: '148px'},300);
				}
			}else{
				if($(window).width()>768){
					gridCont.animate({height: '860px'},300);
				}else{
					gridCont.animate({height: '740px'},300);
				}
			}
		});
	},
	slide: function(options){
		var $container = $(options.container),
			$trigger = $container.find(options.trigger),
			$cont = $container.find(options.cont);
		speed = options.speed || 4000,
			state = true, n=0, num=$trigger.last().index(), t='';

		$trigger.click(function(){
			if(state){
				n = $(this).index();
				fade(n);
				autoPlay();
			}
		});
		function fade(n){
			state=false;
			$cont.stop(true, true).fadeOut(1000).eq(n).fadeIn(1000, function(){state=true});
			$trigger.removeClass('cur').eq(n).addClass('cur');
		}
		function autoPlay(){
			clearInterval(t);
			t = setInterval(function(){
				n = n+1>num ? 0 : n+1;
				fade(n);
			}, speed);
		}
		autoPlay();
	}
}

function Alert(err, id) {
	var str = '<div class="alert"><div class="hd">系统提示</div><span class="close"></span><div class="cont">'+ err +'</div><div class="button"><a class="act" href="javascript:;">确定</a></div></div>';
	$('<div class="mask"></div>').appendTo('body').fadeIn(300, function () {
		$('body').append(str);
	});
	$('body').one('click', '.alert a,.alert .close', function () {
		$('.mask,.alert').fadeOut(300, function () {
			$(this).remove();
			if (id!='' && id!=null) {
				$(id).val('').focus();
			}
		});
	});
	return;
}
}




