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