define(function(require) {
	return  {
		getContext: function() {
			var theCanvas = document.getElementById("reels");
			var ctx = theCanvas.getContext("2d");

			return ctx; 
		}
	};
})