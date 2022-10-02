var musicTime=0;
var musicList=[
	"http://m10.music.126.net/20221002100509/a0d7aae7a7dacb93402ee175333c00cd/ymusic/5d6b/325a/0d7e/6eb915882f74ea72f63095857cd5ae70.mp3",
	"http://m10.music.126.net/20221002101314/12e3ef29764e5ce20b3ebb3779430555/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3419202845/aece/7e7f/e415/ee41858bf0440edee811d042f155c677.mp3",
	"http://m10.music.126.net/20221002101341/752703347cb7653f8478428bd67c7ec9/ymusic/0f52/0408/040e/8849b6189a3bd14ec4253d4315bea81f.mp3",
	"http://m10.music.126.net/20221002101415/a5645c0f0a80aef5cb87e9a22faac011/ymusic/070c/565d/0e52/0f99650a84a7a8c3675598ea88161f1b.mp3",
	"http://m10.music.126.net/20221002101646/3965eef515fbc2ff34ad7f9a00f68de8/ymusic/550b/5558/0709/ba553533beb288e31caf0c76345c1100.mp3"
];
function music(){
	musicTime++;
	var time= musicTime%(musicList.length);
	document.getElementById("musicPlayer").src=musicList[time] 
	document.getElementById("musicPlayer").play();
}
