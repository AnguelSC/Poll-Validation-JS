(function($) {
	$.fn.extend({
		poll: function(){
			this.on('change',function(){
				var $this = $(this);
				var _poll = $this.data('poll');
				if ($this.is('[type=checkbox]') && !$this.is(':checked')) {
					return false;
				}
				if ($this.data('child') == true) {
					$('body').find('[data-children='+ _poll +']').first().focus();
				}else{
					var _next = $this.data('next');
					$('body').find('[data-poll='+ _next +']').first().focus();
				}
			});
		}
	});
})(jQuery)