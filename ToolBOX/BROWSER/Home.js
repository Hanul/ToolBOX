ToolBOX.Home = CLASS({

	preset : function() {
		'use strict';
		
		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		// wrapper
		wrapper = DIV({
			c : ['ToolBOX', UL({
				c : [LI({
					c : A({
						c : 'ReverseLines',
						on : {
							tap : function() {
								ToolBOX.GO('ReverseLines');
							}
						}
					})
				})]
			})]
		}).appendTo(BODY);

		inner.on('close', function() {
			wrapper.remove();
		});
	}
});
