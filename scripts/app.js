(function(document) {
	'use strict';

	var app = document.querySelector('#app');
	app.titleApp = 'Movies';
	app.filmTab = 0;
	app.tvTab = 0;

	app.scrollPageToTop = function() {
		app.$.headerPanelMain.scrollToTop(true);
	};

	// Close drawer after menu item is selected if drawerPanel is narrow
	app.onDataRouteClick = function() {
		var drawerPanel = Polymer.dom(document).querySelector('#paperDrawerPanel');
		if (drawerPanel.narrow) {
			drawerPanel.closeDrawer();
		}
	};

	window.addEventListener('WebComponentsReady', function() {
		// imports are loaded and elements have been registered
	});

})(document);