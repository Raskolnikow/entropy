/**
 * Main entry point for the application
 * 
 */
define(function(require) {
	
	console.log("creating canvas app");

	var ctx = require('./leinwand.js').getContext();
    var sprite = require('./sprite.js');

    // --------------------------------------------------------------------- //

	ctx.fillStyle = "#111111"
	ctx.fillRect(0, 0, 500, 300);

    var spr = new sprite.Sprite('reel_syms.png', run);    

    function run() {
        setInterval(drawImage, 16);
    }

	y_pos = 0;
	function drawImage() {

		ctx.fillStyle = "#222222"
		ctx.fillRect(0, 0, 500, 300);

		ctx.drawImage(spr.bitmap, 100, 0, 100, 100, 0, y_pos, 100, 100);
		
        y_pos += 10;

		if(y_pos > 300)
			y_pos = -100;
	}
});
