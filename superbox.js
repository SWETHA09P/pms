/*
	SuperBox v1.0.0
	by Todd Motto: http://www.toddmotto.com
	Latest version: https://github.com/toddmotto/superbox
	
	Copyright 2013 Todd Motto
	Licensed under the MIT license
	http://www.opensource.org/licenses/mit-license.php

	SuperBox, the lightbox reimagined. Fully responsive HTML5 image galleries.

	***NOTE***
	This is a heavily customized version of the above plugin. 
*/
;(function($) {
		
	$.fn.SuperBox = function(options) {
		
		//var superbox      = $('<div class="superbox-show"></div>');
		
		return this.each(function() {
			
			$('.superbox-list').click(function() {

				$('.superbox-list').removeClass('active-tab');
				$(this).addClass('active-tab');

				var divDataContent = '';

				var divData = $(this).data('div');
				
				divDataContent = $('#' + divData).html();

				//superbox.html(divDataContent);
				$('.superbox-show').html(divDataContent);
				
				if ($(this).next().hasClass('superbox-show')) {
					superbox.toggle();
				} else {
					//superbox.css('display', 'block');
					$('.superbox-show').show();
				}
			
			});
			
		});
	};
})(jQuery);