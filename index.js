var musicTime=0;
var musicLink=[
	"http://music.163.com/song/media/outer/url?id=569962512.mp3",
	"http://music.163.com/song/media/outer/url?id=451126088.mp3",
	"http://music.163.com/song/media/outer/url?id=1360122230.mp3",
	"http://music.163.com/song/media/outer/url?id=423015272.mp3",
	"http://music.163.com/song/media/outer/url?id=26244411.mp3",
	"http://music.163.com/song/media/outer/url?id=1877154230.mp3",
	"http://music.163.com/song/media/outer/url?id=1966149345.mp3",
	"http://music.163.com/song/media/outer/url?id=521415465.mp3",
	"http://music.163.com/song/media/outer/url?id=33937527.mp3"
];
var musicName=[
	"Xomu - Lanterns",
	"Elektronomia - Sky High",
	"Kirara Magic - 花月",
	"Jiaye,Tobu - Seven (Jiaye Reboot)",
	"F-777 - Dream On",
	"Plum - R",
	"Plum - Kaleidoscope",
	"Xomu - Tera",
	"EnV - Pneumatic Tokyo"
]
function music(){
	musicTime++;
	var time= musicTime%(musicLink.length);
	document.getElementById("musicPlayer").src=musicLink[time] 
	document.getElementById("musicPlayer").play();
	
	document.getElementById("music-show").innerHTML=musicName[time]
}
