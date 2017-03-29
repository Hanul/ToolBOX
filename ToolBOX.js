require(process.env.UPPERCASE_PATH + '/LOAD.js');

BOOT({
	CONFIG : {
		isDevMode : true,
		defaultBoxName : 'ToolBOX',
		webServerPort : 8430
	},
	NODE_CONFIG : {
		isNotUsingCPUClustering : true
	}
});
