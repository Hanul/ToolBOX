ToolBOX.ReverseLines = CLASS({

	preset : function() {
		'use strict';
		
		return VIEW;
	},

	init : function(inner, self) {
		'use strict';

		var
		// textarea
		textarea,
		
		// wrapper
		wrapper = DIV({
			c : [textarea = TEXTAREA({
				style : {
					width : '100%',
					height : 300
				}
			}), A({
				c : 'GO!',
				on : {
					tap : function() {
						
						var
						// new value
						newValue = '';
						
						REVERSE_EACH(textarea.getValue().split('\n'), function(line, i) {
							newValue += line;
							if (i > 0) {
								newValue += '\n';
							}
						});
						
						textarea.setValue(newValue);
					}
				}
			})]
		}).appendTo(BODY);

		inner.on('close', function() {
			wrapper.remove();
		});
	}
});
