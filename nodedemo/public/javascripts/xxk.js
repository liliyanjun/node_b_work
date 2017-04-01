window.onload=function(){
str = window.location.href.split("=")[1];
$.ajax({
	url:"http://localhost:8005/text/shop_id?id="+str,
	type:"get",
	dataType:'json',
	success:function(data){
		console.log(data)
		var html='';
			html='<div class=l_rt-tit><span><em>¥</em>'+data[0].price+'</span><h4>'+data[0].name+'</h4><h5>'+data[0].info+'</h5></div>'
		$('.l_xq-right').prepend(html);
		//吸顶条遍历
		var html_two='';
			html_two='<p>'+data[0].name+'</p><p>¥'+data[0].price+'</p>'
		$('.l_fix-item').append(html_two);
		//图片遍历(小图)
		x_img_le = data[0].img_small.split(",");
		for(var i=0;i<x_img_le.length;i++){
			x_img = data[0].img_small.split(",")[i];
			var img_html = '';      							   /*<img src=upload/'+data[i].img+'>*/
			 	img_html = '<a data-index='+i+' href="#x" class="on"><img src=upload/'+x_img+'></a>'
			$('.l_lt-btn').append(img_html);
		}
//					图片遍历(大图)
		b_img_le = data[0].img_big.split(",");
		for(var i=0;i<b_img_le.length;i++){
			b_img = data[0].img_big.split(",")[i];
//						alert(b_img)
			var img_big = '';
			 	img_big = '<li><img src=upload/'+b_img+'></li>'
			$('.l_lt-banner').append(img_big);
		}
		
		b_img_details = data[0].img_details.split(",");
		for(var i=0;i<b_img_details.length;i++){
			d_img = data[0].img_details.split(",")[i];
//						alert(b_img)
			var details_big = '';
			 	details_big = '<li><img src=upload/'+d_img+'></li>'
			$('.l_xq-content').append(details_big);
		}
		
		one_img =x_img_le = data[0].img_small.split(",")[0];
		var one_html = '';
		 	one_html = '<li><img src=upload/'+one_img+'></li>'
		$('.l_fix-pic').append(one_html);
		
		var glume = function(banners_id,focus_id){
	    this.$btn = $('#' + banners_id);
	    this.$focus = $('#' + focus_id);
	    this.$adLis = null;
	    this.$btns = null;
	//  this.switchSpeed = 5;//自动播放间隔(5s)
	    this.defOpacity = 1;
	    this.crtIndex = 0;
	    this.adLength = 0;
	    this.timerSwitch = null;
	    this.init();
	};
	glume.prototype = {
	    fnNextIndex:function(){
	        return (this.crtIndex >= this.adLength-1)?0:this.crtIndex+1;
	    },
	    //动画切换
	    fnSwitch:function(toIndex){
	        if(this.crtIndex==toIndex){return;}
	        this.$adLis.css('zIndex', 0);
	        this.$adLis.filter(':eq('+this.crtIndex+')').css('zIndex', 2);
	        this.$adLis.filter(':eq('+toIndex+')').css('zIndex', 1);
	        this.$btns.removeClass('on');
	        this.$btns.filter(':eq('+toIndex+')').addClass('on');
	        var me = this;
	
	        $(this.$adLis[this.crtIndex]).animate({
	            opacity: 0
	        }, 2000, function() {
	            me.crtIndex = toIndex;
	            $(this).css({
	                opacity: me.defOpacity,
	                zIndex: 0
	            });
	        });
	    },
	    init:function(){
	        this.$adLis = this.$btn.children();
	        this.$btns = this.$focus.children();
	        this.adLength = this.$adLis.length;
	
	        var me = this;
	        //点击切换
	        this.$focus.on('click', 'a', function(e) {
	            e.preventDefault();
	            var index = parseInt($(this).attr('data-index'), 10)
	            me.fnSwitch(index);
	        });
	        this.$adLis.filter(':eq('+ this.crtIndex +')').css('zIndex', 2);
	    }
	};
	var player1 = new glume('_banners','_focus');
	}
})
}