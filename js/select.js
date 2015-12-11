/*
**	Author: Vladimir Shevchenko
**	URI: http://www.howtomake.com.ua/2012/stilizaciya-vsex-elementov-form-s-pomoshhyu-css-i-jquery.html 
*/

$(document).ready(function(){		
	// Select
	$('.slct').click(function(){
		/* Заносим выпадающий список в переменную */
		var dropBlock = $(this).parent().find('.drop');		
		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( dropBlock.is(':hidden') ) {
			dropBlock.slideDown();			
			/* Выделяем ссылку открывающую select */
			$(this).addClass('active');			
			/* Работаем с событием клика по элементам выпадающего списка */
			$('.drop').find('li').click(function(){				
				/* Заносим в переменную HTML код элемента 
				списка по которому кликнули */
				var selectResult = $(this).html();				
				/* Находим наш скрытый инпут и передаем в него 
				значение из переменной selectResult */
				$(this).parent().parent().find('input').val(selectResult);				
				/* Передаем значение переменной selectResult в ссылку которая 
				открывает наш выпадающий список и удаляем активность */
				$('.slct').removeClass('active').html(selectResult);				
				/* Скрываем выпадающий блок */
				dropBlock.slideUp();
			});			
		/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
			$(this).removeClass('active');
			dropBlock.slideUp();
		}		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});	
});
$(document).ready(function(){		
	// Select
	$('.slct2').click(function(){
		/* Заносим выпадающий список в переменную */
		var dropBlock2 = $(this).parent().find('.drop2');		
		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( dropBlock2.is(':hidden') ) {
			dropBlock2.slideDown();			
			/* Выделяем ссылку открывающую select */
			$(this).addClass('active');			
			/* Работаем с событием клика по элементам выпадающего списка */
			$('.drop2').find('li').click(function(){				
				/* Заносим в переменную HTML код элемента 
				списка по которому кликнули */
				var selectResult2 = $(this).html();				
				/* Находим наш скрытый инпут и передаем в него 
				значение из переменной selectResult */
				$(this).parent().parent().find('input').val(selectResult2);				
				/* Передаем значение переменной selectResult в ссылку которая 
				открывает наш выпадающий список и удаляем активность */
				$('.slct2').removeClass('active').html(selectResult2);				
				/* Скрываем выпадающий блок */
				dropBlock2.slideUp();
			});			
		/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
			$(this).removeClass('active');
			dropBlock2.slideUp();
		}		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});	
});
$(document).ready(function(){		
	// Select
	$('.slct3').click(function(){
		/* Заносим выпадающий список в переменную */
		var dropBlock3 = $(this).parent().find('.drop3');		
		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( dropBlock3.is(':hidden') ) {
			dropBlock3.slideDown();			
			/* Выделяем ссылку открывающую select */
			$(this).addClass('active');			
			/* Работаем с событием клика по элементам выпадающего списка */
			$('.drop3').find('li').click(function(){				
				/* Заносим в переменную HTML код элемента 
				списка по которому кликнули */
				var selectResult3 = $(this).html();				
				/* Находим наш скрытый инпут и передаем в него 
				значение из переменной selectResult */
				$(this).parent().parent().find('input').val(selectResult3);				
				/* Передаем значение переменной selectResult в ссылку которая 
				открывает наш выпадающий список и удаляем активность */
				$('.slct3').removeClass('active').html(selectResult3);				
				/* Скрываем выпадающий блок */
				dropBlock3.slideUp();
			});			
		/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
			$(this).removeClass('active');
			dropBlock3.slideUp();
		}		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});	
});
$(document).ready(function(){		
	// Select
	$('.slct4').click(function(){
		/* Заносим выпадающий список в переменную */
		var dropBlock4 = $(this).parent().find('.drop4');		
		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( dropBlock4.is(':hidden') ) {
			dropBlock4.slideDown();			
			/* Выделяем ссылку открывающую select */
			$(this).addClass('active');			
			/* Работаем с событием клика по элементам выпадающего списка */
			$('.drop4').find('li').click(function(){				
				/* Заносим в переменную HTML код элемента 
				списка по которому кликнули */
				var selectResult4 = $(this).html();				
				/* Находим наш скрытый инпут и передаем в него 
				значение из переменной selectResult */
				$(this).parent().parent().find('input').val(selectResult4);				
				/* Передаем значение переменной selectResult в ссылку которая 
				открывает наш выпадающий список и удаляем активность */
				$('.slct4').removeClass('active').html(selectResult4);				
				/* Скрываем выпадающий блок */
				dropBlock4.slideUp();
			});			
		/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
			$(this).removeClass('active');
			dropBlock4.slideUp();
		}		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});	
});
$(document).ready(function(){		
	// Select
	$('.slct5').click(function(){
		/* Заносим выпадающий список в переменную */
		var dropBlock5 = $(this).parent().find('.drop5');		
		/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
		if( dropBlock5.is(':hidden') ) {
			dropBlock5.slideDown();			
			/* Выделяем ссылку открывающую select */
			$(this).addClass('active');			
			/* Работаем с событием клика по элементам выпадающего списка */
			$('.drop5').find('li').click(function(){				
				/* Заносим в переменную HTML код элемента 
				списка по которому кликнули */
				var selectResult5 = $(this).html();				
				/* Находим наш скрытый инпут и передаем в него 
				значение из переменной selectResult */
				$(this).parent().parent().find('input').val(selectResult5);				
				/* Передаем значение переменной selectResult в ссылку которая 
				открывает наш выпадающий список и удаляем активность */
				$('.slct5').removeClass('active').html(selectResult5);				
				/* Скрываем выпадающий блок */
				dropBlock5.slideUp();
			});			
		/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
		} else {
			$(this).removeClass('active');
			dropBlock5.slideUp();
		}		
		/* Предотвращаем обычное поведение ссылки при клике */
		return false;
	});	
});