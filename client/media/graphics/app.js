window.addEventListener("load", eventWindowLoaded, false);

function eventWindowLoaded () {
	createApp();
}

function createApp () {
	console.log("creating canvas app");

	var theCanvas = document.getElementById("reels");
	var ctx = theCanvas.getContext("2d");

	ctx.fillStyle = "#111111"
	ctx.fillRect(0, 0, 500, 300);

	var syms = createSymbols();

	y_pos = [0,0,0,0,0,0,0,0];

	function drawImage() {

		ctx.fillStyle = "#222222"
		ctx.fillRect(0, 0, 500, 300);

		for(var i=0; i<5; i++) {
			ctx.drawImage(syms[i], 200, 300, 100, 100, 100*i, y_pos[i],100,100);
			y_pos[i] += 10 - i;

			if(y_pos[i] > 400)
				y_pos[i] = -100;
		}
		
	}

	function createSymbols() {

		var syms = [];

		for(var i=0; i<5; i++) {
			syms[i] = new Image();
			syms[i].src = "reel_syms_red.png"
		}

		syms[0].onload = function() {
			setInterval(drawImage, 16);
		}

		return syms;
	}
	
}