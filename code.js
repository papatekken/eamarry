var weddingYear = 2013;
var weddingMonth = 12;
var weddingDay = 7;

var vidElement0 = document.getElementById('video0');
var vidElement1 = document.getElementById('video1');
var vidElement2 = document.getElementById('video2');
var vidElement3 = document.getElementById('video3');
var vidElement4 = document.getElementById('video4');

var vidSource0 = "video/video1.mp4";
var vidSource1 = "video/video2.mp4";
var vidSource2 = "video/video3.mp4";
var vidSource3 = "video/video4.mp4";
var vidSource4 = "video/video5.mp4";

function showTime() 
{
var dt1 = new Date();
var dt2	= new Date(weddingYear +"-" +weddingMonth +"-" +weddingDay);

var diff_date =  dt1 - dt2;

var num_year = Math.floor(diff_date/31536000000);
var num_month = Math.floor((diff_date % 31536000000)/2628000000);
var num_day = Math.floor(((diff_date % 31536000000) % 2628000000)/86400000) - leapYearCount(weddingYear, weddingMonth, weddingDay);
var num_hour = Math.floor((((diff_date % 31536000000) % 2628000000) %86400000)/3600000);
var num_min = Math.floor(((((diff_date % 31536000000) % 2628000000) %86400000)%3600000) /60000);
var num_sec = Math.floor((((((diff_date % 31536000000) % 2628000000) %86400000) %3600000) %60000)/1000);

    num_hour = (num_hour < 10) ? " " + num_hour : num_hour;
    num_min = (num_min < 10) ? " " + num_min : num_min;
    num_sec = ( num_sec < 10) ? " " + num_sec : num_sec;  
	
var dategap = num_year + ' years ' + num_month + '  months ' + num_day + ' days ' + num_hour + ' hours '  + num_min + ' minutes ' + num_sec + ' seconds ' ;

    document.getElementById("MyClock").innerText = dategap;
    document.getElementById("MyClock").textContent = dategap;
    
    setTimeout(showTime, 1000);
    
}

function leapYearCount(y,m,d){
    var yearNow = new Date().getFullYear(),
        yearThen = y,
        beginYear = 0,
        endYear = 0,
        leapYearCount = 0;

    var isLeapYear = function(year){
      return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }

    if(yearNow < y){
       beginYear = yearNow;
       endYear = y;
    }else if(yearNow > y){
       beginYear = y;
       endYear = yearNow;
    }else if(yearNow == y){
       beginYear = y;
       endYear = y;
    }

    for(i = beginYear; i <= endYear; i++){
      if(isLeapYear(i)){
        leapYearCount++;
      }
    }
    return leapYearCount;
}

function start()
{
	var bgmusic = document.getElementById("playAudio");
	bgmusic.play();
	var startlayer = document.getElementById("dimScreen");
	startlayer.style.display = "none";
	vidElement0.src = vidSource0;
	vidElement1.src = vidSource1;
	vidElement2.src = vidSource2;
	vidElement3.src = vidSource3;
	vidElement4.src = vidSource4;

	var rand = Math.floor((Math.random() * 5 ));

	var vidRandom = document.getElementById("video" + rand);
	vidRandom.play();
	vidRandom.style.display = "block";
}
 
vidElement0.addEventListener('ended', function(e) {
	vidElement1.play();
	vidElement0.style.display = "none";
    vidElement1.style.display = "block";
});

vidElement1.addEventListener('ended', function(e) {
	vidElement2.play();
	vidElement1.style.display = "none";
	vidElement2.style.display = "block";
});

vidElement2.addEventListener('ended', function(e) {
	vidElement3.play();
	vidElement2.style.display = "none";
	vidElement3.style.display = "block";
});
vidElement3.addEventListener('ended', function(e) {
	vidElement4.play();
	vidElement3.style.display = "none";
	vidElement4.style.display = "block";
});
vidElement4.addEventListener('ended', function(e) {
	vidElement0.play();
	vidElement4.style.display = "none";
	vidElement0.style.display = "block";
});
showTime();