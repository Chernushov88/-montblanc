(function($) {
$(function() {

	$('ul.tabs__caption').on('click', 'li:not(.active-tab)', function() {
		$(this)
			.addClass('active-tab').siblings().removeClass('active-tab')
			.closest('div.tabs').find('div.tabs__content').removeClass('active-tab').eq($(this).index()).addClass('active-tab');
	});

});
})(jQuery);