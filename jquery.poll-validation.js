(function($) {
	$.fn.extend({
		poll: function(){
			var _current = this.first().data('poll');
			var _data = this;
			this.on('change',function(){
				var $this = $(this),_poll = $this.data('poll'),_cond = $this.data('cond');
				if ($this.is('[type=checkbox]') && !$this.is(':checked')) {
					return false;
				}else{
					$('body').find('[data-poll='+ _next +']').prop('disabled',false).first();
				}
				if ($this.data('child') == true) {
					$('body').find('[data-children='+ _poll +']').first().focus();
				}else{
					var _next = $this.data('next');
					$('body').find('[data-poll='+ _next +']').prop('disabled',false).first().focus();
				}
				$.each(_data,function(i,val) {
					if($(val).data('poll') > _poll && _next > $(val).data('poll')){
						if(_cond == true){
							$(val).prop('disabled',true).val('').prop('disabled',true);
						}else{
							$(val).prop('disabled',true);
						}
					}
					if($(val).data('poll') == _next){
						$(val).prop('disabled',false);
					}
					
				});
			});
			this.each(function() {
				var $this = $(this);
				if($this.data('poll') > _current)
					$this.prop('disabled',true);
			});
		}
	});
})(jQuery)