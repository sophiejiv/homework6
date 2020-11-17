var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var x = document.querySelector("#volumeSlider").value;
	document.querySelector("#volume").innerHTML = x + '%'
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .90;
	console.log("Speed is" + video.playbackRate);

});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.10;
	console.log("Speed:" + video.playbackRate);

});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 5;
	if (video.ended) {
		video.load(); 
		video.play();
	}
	console.log("Video Current Time: " + video.currentTime);

});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false; 
		let sound = document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmuted");
	}
	else{
		video.muted = true; 
			let sound = document.getElementById("mute").innerHTML = "Unmute";
			console.log("Muted");
	}

});

document.querySelector("#volumeSlider").oninput = function() {
	sliderChange()
	setVolume()
	// video.volume = volumeSlider.value/100;
	// let slider = document.getElementById("volume").innerHTML = volumeSlider.value + "%";
	// console.log (volumeSlider.value);
};

function sliderChange(val){
	var val = document.querySelector("#volumeSlider").value;
	document.querySelector("#volume").innerHTML = val + "%";
}

function setVolume(){
	video.volume = document.querySelector('#volumeSlider').value / 100;
}

document.querySelector("#old").addEventListener("click", function() {
	// var vid = document.getElementById("myVideo");
	video.classList.add("oldTime");
	console.log("Grayscale");
});

document.querySelector("#original").addEventListener("click", function() {
	// var vid = document.getElementById("myVideo");
	video.classList.remove("oldTime");
	console.log("Original");
});


