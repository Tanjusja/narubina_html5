$(function(){
//начало кода, ограничитель

/*$('.topmenu a').bind('mouseover',function(){
		data=$(this).attr('data-url'); //обращается к атрибутам текущего селектора
				//console.log(data); //лучше не оставлять
		$('#header').css('background', 'url('+data+')');
		});//прослушиватель bind (вход.параметр, принимает в колл-бэк функцию)
		*/
		$('.topmenu a').bind({'mouseover':function(){
		data=$(this).attr('data-url'); 
				
		$('#header').css('background', 'url('+data+')');
		},
		'mouseout':function(){
		$('#header').css('background','url(media/img/fon1.jpg)');
		},
		});
		
		$('.leftmenu a').bind({'click':function(){
			data=$(this).attr('data-title'); 		
			$('.h3main').text(data);
			}	
		});
		$('.leftmenu a').bind({'click':function(){
			data2=$(this).attr('data-body'); 		
			$('.main').html(data2);
			}	
		});
});