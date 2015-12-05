/**
 * Main entry point for the application
 *
 * 
 */
define(function(require) {
	
	console.log("creating canvas app");

	var ctx = require('./leinwand.js').getContext();

	ctx.fillStyle = "#111111"
	ctx.fillRect(0, 0, 500, 300);

	var syms = createSymbols();

	y_pos = [0,0,0,0,0,0,0,0];

	function drawImage() {

		ctx.fillStyle = "#222222"
		ctx.fillRect(0, 0, 500, 300);

		for(var i=0; i<5; i++) {
			ctx.drawImage(syms[i], 100, 0, 100, 100, 100*i, y_pos[i],100,100);
			y_pos[i] += 10 - i;

			if(y_pos[i] > 400)
				y_pos[i] = -100;
		}
		
	}

	function createSymbols() {

		var syms = [];

		for(var i=0; i<5; i++) {
			syms[i] = new Image();
			syms[i].src = "reel_syms.png"
		}

		syms[0].onload = function() {
			setInterval(drawImage, 16);
		}

		return syms;
	}
});
