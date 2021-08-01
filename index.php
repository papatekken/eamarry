<html>
<head>
<title>E & A </title>
<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="style.css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Orbitron&family=Roboto:wght@300&display=swap" rel="stylesheet">
</head>
<body>

<audio  loop  id="playAudio">
    <source src="music/music.mp3"  type="audio/mp3">
</audio>
	<section class="header">
	<video src="" id="video0"  class='video-background' preload  muted play-inline ></video>
	<video src="" id="video1"  class='video-background' preload  muted play-inline></video>
	<video src="" id="video2"  class='video-background' preload  muted play-inline></video>
	<video src="" id="video3"  class='video-background' preload  muted play-inline></video>
	<video src="" id="video4"  class='video-background' preload  muted play-inline></video>
	<!--img src="demo-logo.png" class="logo"-->
	<div class="clockbox">
		<hr>
		<h1>Married for </h1>
		<div id="MyClock" class="clock" onload="showTime()"></div>
		<hr>
	</div>
</section>
<div id="dimScreen" onclick="start();"><button id="startButton">| Click to view |</button></div>
</body>
<script src="code.js"></script>

</html>