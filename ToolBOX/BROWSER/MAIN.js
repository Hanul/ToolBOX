ToolBOX.MAIN = METHOD({

	run : function(params) {
		'use strict';

		ToolBOX.MATCH_VIEW({
			uri : '',
			target : ToolBOX.Home
		});

		ToolBOX.MATCH_VIEW({
			uri : 'ReverseLines',
			target : ToolBOX.ReverseLines
		});
	}
});
