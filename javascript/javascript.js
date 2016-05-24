$(document).ready(function(){
    console.log("Jquery is loaded!");

function Jukebox(){

	var array = ['music/TimHenson-Bittersweet-8-Bit.mp3', 'music/ModernDayBabylon-Wings.mp3', 'music/ModernDayBabylon-WaterDrops.mp3', 'music/ModernDayBabylon-Illusion.mp3', 'music/ModernDayBabylon-Falls.mp3', 'music/ModernDayBabylon-ThroughtheWorld.mp3', 'music/ModernDayBabylon-Wings(Remix).mp3']
	x = 0
	var music = document.getElementById('music');
	


	this.auto = function(){
		music.play();
		$("#pButton").removeClass("play");
		$("#pButton").addClass("pause");
	}

	this.end = function(){
		if (music.paused){
			$("#pButton").removeClass("play");
			$("#pButton").addClass("pause")
		} else if (x < array.length - 1) {
			x++;
		} else {
			x = 0;
		} $('#music').attr('src', array[x])
		music.play()
	};

	this.forward = function(){
		if (x < array.length){
			x++;
		} else {
			x = 0;
		} $('#music').attr('src', array[x])
			music.play()
	};

	this.previous = function(){
		if (x == 0){
			x = array.length - 1;
		} else {
			x--;
		} $('#music').attr('src', array[x])
			music.play()
	};


	this.play = function(){
		if (music.paused){
			music.play();
			$("#pButton").removeClass("play");
			$("#pButton").addClass("pause");
		} else { 
			music.pause();
			$("#pButton").removeClass("pause");
			$("#pButton").addClass("play");
		};
	}

	this.stop = function(){
			music.pause();
			music.currentTime = 0;
			$("#pButton").removeClass("pause");
			$("#pButton").addClass("play");
	};

	this.upload = function(){
		array.push($('#url').val());
		console.log(array)
	};

}

Testbox = new Jukebox

Testbox.auto()

$('#pButton').on('click', function(){
	Testbox.play()
})

$(music).on('ended', function() {
	Testbox.end()
})

$('#sButton').on('click', function(){
	Testbox.stop()
})

$('#uButton').on('click', function(){
	Testbox.upload()
})

$('#fButton').on('click', function(){
	Testbox.forward()
})

$('#bButton').on('click', function(){
	Testbox.previous()
})

});

// var array = ['music/TimHenson-Bittersweet-8-Bit.mp3', 'music/ModernDayBabylon-Wings.mp3', 'music/ModernDayBabylon-WaterDrops.mp3', 'music/ModernDayBabylon-Illusion.mp3', 'music/ModernDayBabylon-Falls.mp3', 'music/ModernDayBabylon-ThroughtheWorld.mp3', 'music/ModernDayBabylon-Wings(Remix).mp3']
// x = 0
// var music = new Audio(array[x]);

// console.log(music)

// music.play();
// $("#pButton").removeClass("play");
// $("#pButton").addClass("pause");

// $(music).on('ended', function() {
//    playing = false;
// 	$("#pButton").removeClass("pause");
// 	$("#pButton").addClass("play");
// 	x++;
// 	music.play();
// 	console.log(x)
// });

// $('#pButton').on('click', function(){
// 		if (music.paused){
// 			music.play();
// 			$("#pButton").removeClass("play");
// 			$("#pButton").addClass("pause");
// 		} else { 
// 			music.pause();
// 			$("#pButton").removeClass("pause");
// 			$("#pButton").addClass("play");
// 		}

// });

// $('#sButton').on('click', function(){
// 		music.pause();
// 		music.currentTime = 0;
// 		$("#pButton").removeClass("pause");
// 		$("#pButton").addClass("play");
// });

// $('#uButton').on('click', function(){
// 	array.push($('#url').val());
// 	console.log(array)
// });

// });