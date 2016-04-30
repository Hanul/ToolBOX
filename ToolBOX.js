require(process.env.UPPERCASE_PATH + '/BOOT.js');

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
