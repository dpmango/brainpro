$(document).ready(function () {

	// Мобильное меню
	$('.menu-toggle, .menu-toggle--inside').on('click', function () {
		$('body').addClass('no-scroll');
		$('.main-menu').show(300);
		$('.main-menu').css('display', 'flex');
	});
	$('.main-menu__close').on('click', function () {
		$('.main-menu').hide(300);
		$('body').removeClass('no-scroll');
	});

	// Услуги на мобильных на главной
	$('.service-sec__mobile-item').on('click', function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).parent('.container').removeClass('active');
			$(this).next('.service-sec__mobile-hide').slideUp(200);
		} else {
			$(this).addClass('active');
			$(this).parent('.container').addClass('active');
			$(this).next('.service-sec__mobile-hide').slideDown(200);
		}
	});

	// Табы с ценами на странице принт
	$('.prices-sec__tab').on('click', function () {
		$('.prices-sec__tab').removeClass('active');
		$(this).addClass('active');
		var dataId = $(this).attr('data-id');

		$('.prices-sec__items').removeClass('active');
		$('.prices-sec__items#' + dataId).addClass('active');
	});

	// Форма заказа табы
	$('.order-form__tab-back--disable, .order-form__tab--disable').on('click', function (e) {
		e.preventDefault();
	});

	// Отдать товар
	$('.order-form__tab:not(.order-form__tab--disable)').on('click', function (e) {
		e.preventDefault();
		$('.order-form__tab').removeClass('active');
		$(this).addClass('active');
		if ($('.order-form__tab.for-shops').hasClass('active')) {
			$('.order-form__give .order-form__common-tab').hide();
			$('.order-form__give .order-form__shops-wrap').show();
		}
		if ($('.order-form__tab.for-post').hasClass('active')) {
			$('.order-form__give .order-form__common-tab').hide();
			$('.order-form__give .order-form__post').show();
		}
		if ($('.order-form__tab.for-courier').hasClass('active')) {
			$('.order-form__give .order-form__common-tab').hide();
			$('.order-form__give .order-form__courier').show();
		}
	});

	// Получить товар
	$('.order-form__tab-back:not(.order-form__tab-back--disable)').on('click', function (e) {
		e.preventDefault();
		$('.order-form__tab-back').removeClass('active');
		$(this).addClass('active');
		if ($('.order-form__tab-back.for-shops').hasClass('active')) {
			$('.order-form__take .order-form__common-tab').hide();
			$('.order-form__take .order-form__shops-wrap').show();
		}
		if ($('.order-form__tab-back.for-post').hasClass('active')) {
			$('.order-form__take .order-form__common-tab').hide();
			$('.order-form__take .order-form__post').show();
		}
		if ($('.order-form__tab-back.for-courier').hasClass('active')) {
			$('.order-form__take .order-form__common-tab').hide();
			$('.order-form__take .order-form__courier').show();
		}
	});

	// Доплачу за доставку до адреса
	$('.order-form__post .order-form__check').change(function () {
		if ($(this).is(':checked')) {
			$(this).siblings('.order-form__input').show();
		} else {
			$(this).siblings('.order-form__input').hide();
		}
	});

	// Маска для телефона
	$(".order-form__input--tel").mask("(999) 999-99-99", {
		placeholder: "(___) ___-__-__"
	});

	// Подробная инфа о магазине
	$('.order-form__shop').click(function (e) {
		e.preventDefault();
		$('.order-form__shop').not(this).removeClass('active').next('.order-form__shop-info').slideUp(200);
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.order-form__shop-info').slideUp(200);
		} else {
			$(this).addClass('active').next('.order-form__shop-info').slideDown(200);
		}
	});
	
	// Плавные плейсхолдеры
	$('.order-form__input input').focus(function(){
		$(this).next('.order-form__placeholder').addClass('active');
		$(this).css({
			"paddingTop":"23px",
			"paddingBottom":"13px"
		});
	});
	$('.order-form__input input').focusout(function(){
		if ($(this).val() == "") {
			$(this).next('.order-form__placeholder').removeClass('active');
			$(this).css({
			"paddingTop":"18px",
			"paddingBottom":"18px"
		});
		} 
	});
	
	// Слайдер 
	$('.about-us__img-item').hover(function(){
		$('.about-us__img-item').removeClass('active');
		$(this).addClass('active');
	});
	
	
	// Смена города
	  $('.contacts__select').on('change', function() {
    var city = $(this).val()
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': city
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        mapContacts.setCenter(results[0].geometry.location);
      } else {
        // something is wrong
      }
    });
  });
});