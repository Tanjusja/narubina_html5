$(function(){
//������ ����, ������������

/*$('.topmenu a').bind('mouseover',function(){
		data=$(this).attr('data-url'); //���������� � ��������� �������� ���������
				//console.log(data); //����� �� ���������
		$('#header').css('background', 'url('+data+')');
		});//�������������� bind (����.��������, ��������� � ����-��� �������)
		*/
		$('.topmenu a').bind({'mouseover':function(){
			data=$(this).attr('data-url'); 		
			$('#header').css('background', 'url('+data+')');
		},
		'mouseout':function(){
			$('#header').css('background','url(media/img/numbers5.jpg)');
		},
		});
		
		$('.leftmenu a').bind({'click':function(){
			data=$(this).attr('data-title'); 		
			$('.h3main').text(data);
			}	
		});
		$('.leftmenu a').bind({'click':function(){
			data2=$('<img>').attr('src','data-url');
			$('.img_main').html(data2);
			}
		});
		$('.leftmenu a').bind({'click':function(){
			data3=$(this).attr('data-body'); 		
			$('.main').html(data3);
			}	
		});
		$('.call').bind({'mouseover':function(){
			$(this).hide('data-title');
			$('.button_call').show('fast');
		}
		});
});