requirejs.config({
	baseUrl : 'lib',
	paths: {
		app: '/app'
	}
});

requirejs(['app/main'], function(main) {

	function eventWindowLoaded () {
		main.createApp();
	}

	window.addEventListener('load', eventWindowLoaded, false);
});