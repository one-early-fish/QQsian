$(function(){
	//banner轮播
	(function(){
		var obanner=$('.banner');
		var oup=$('.banner .up');
		var odown=$('.banner .down');
		var oul=$('.banner ul');
		var oli=$('.banner').find('ol').find('li');
		var aImg=$('.banner ul img:eq(0)')
		var num=0;
		var timer=null;
		var iW=aImg.width();
		
		//上一张
		function getup(){
			num--;
			if(num<0){
				num=9;
			}
			oli.attr('class','');
			oli.eq(num).attr('class','active');
			oul.css('left',-iW*num);
		}
		//下一张
		function getdown(){
			num++;
			if(num>=10){
				num=0;
			}
			oli.attr('class','');
			oli.eq(num).attr('class','active');
			oul.css('left',-iW*num);
		}
		
		//右侧按钮点击
		odown.click(function(){
			getdown();
		})
		//左侧按钮点击
		oup.click(function(){
			getup();
		})
		
		//自动轮播
		autoplay();
		function autoplay(){
			clearInterval(timer);
			timer=setInterval(function(){
				getdown();
			},3000)
		}
		
		//底部按钮移动样式
		oli.each(function(index){
			$(this).mouseover(function(){
				oli.attr('class','');
				$(this).attr('class','active');
				oul.css('left',-iW*index);
				num=index;
			})
		})
		
		//移入停止定时器
		obanner.mouseover(function(){
			clearInterval(timer);
		})
		//移出开启定时器
		obanner.mouseout(function(){
			autoplay();
		})
	})();
	
	
	//小轮播
	(function(){
		var oadply=$('.adplay');
		var oul=$('.adplay ul');
		var aImg=$('.adplay ul img:eq(0)');
		var oli=$('.adplay ol li');
		var num=0;
		var timer=null;
		var iW=aImg.width();
		//播放
		function adplay(){
			num++;
			if(num>=4){
				num=0;
			}
			oli.attr('class','');
			oli.eq(num).attr('class','active');
			oul.css('left',-iW*num);
		}
		//自动播放
		autoadplay();
		function autoadplay(){
			clearInterval(timer);
			timer=setInterval(function(){
				adplay();
			},3000)
		}
		
		//底部按钮样式
		oli.each(function(index){
			$(this).mouseover(function(){
				oli.attr('class','');
				$(this).attr('class','active');
				oul.css('left',-iW*index);
				num=index;
			})
		})
	})();
	
	
	//搜索框焦点事件
	(function(){
		var otext=$('#nav .text');
		otext.focus(function(){
			if($(this).val()=='找到好音乐'){
				$(this).val('');
			}
		})
		otext.blur(function(){
			if($(this).val()==''){
				$(this).val('找到好音乐');
			}
		})
	})();
	
	//推荐方面
	(function(){
		var oli=$('.recom_music_list li');
		
		oli.each(function(index){
			$(this).hover(function(){
				$(this).addClass('active')
			},function(){
				oli.removeClass('active');
			})
		})		
	})();
	
	//导航
	(function(){
		var ali=$('.wrap_section1 .first_list ul li');
		var ool=$('.wrap_section1 .next_list ol');
		var oli=ool.find('li')
		var len=ool.length;
		var iw=150;
		
		ali.each(function(index){
			$(this).mouseover(function(){
				ool.css('display','none');
				ool.eq(index).css('width',iw*len);
				ool.eq(index).css('display','block');
			})
		})
		
		
	})();
	
});





























































