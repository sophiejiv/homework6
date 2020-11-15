var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .9
	console.log("Video PlaybackRate")

});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.1
	console.log("Video PlaybackRate")

});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 5
	if (video.ended) {
		video.load() 
		video.play()
	}
	console.log("Video Current Time")

});

document.querySelector("#mute").addEventListener("click", function() {
	if 
	(video.muted) {
		video.muted = false 
		let sound = document.getElementById("mute").innerHTML = "Mute";
		console.log("Video Muted")
	}
	else{
		video.muted = true 
			let sound = document.getElementById("mute").innerHTML = "Unmuted";
			console.log("Video Unmuted")
	}

});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	let slider = document.getElementById("volume").innerHTML = volumeSlider.value + "%"
	console.log (volumeSlider.value)
});

document.querySelector("#old").addEventListener("click", function() {
	document.getElementById("myVideo").style.filter = "grayscale(100%)";
});

document.querySelector("#original").addEventListener("click", function() {
	document.getElementById("myVideo").style.filter = "grayscale(0%)";
});


