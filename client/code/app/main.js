/**
 * Main entry point for the application
 * 
 */
define(function(require) {
	
	var y_pos = 0;

	var ctx = require('./leinwand.js').getContext();
    var sprite = require('./sprite.js');

    console.log("creating canvas app");

    // --------------------------------------------------------------------- //

	ctx.fillStyle = "#111111"
	ctx.fillRect(0, 0, 500, 300);

    var spr = new sprite.Sprite('reel_syms.png', run);    

    function run() {
        setInterval(drawImage, 16);
    }

	
	function drawImage() {

		ctx.fillStyle = "#222222"
		ctx.fillRect(0, 0, 500, 300);

		ctx.drawImage(spr.bitmap, 100, 0, 100, 100, 0, y_pos, 100, 100);
		
        y_pos += 10;

		if(y_pos > 300)
			y_pos = -100;
	}
});
