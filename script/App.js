import endpoints from "./modules/endpoints.js";
import ajax from "./modules/ajax.js";
import playHandler from "./modules/play.js";
import mute from "./modules/mute.js";
import previusBtn from "./modules/previus-btn.js";
import nextBtn from "./modules/next-btn.js";
import timeUpdate from "./modules/time-update.js";
import calculateTime from "./modules/calculate-time.js";
import hamburgerBtn from "./modules/hamburger-btn.js";
import deleteMusic from "./modules/delete-music.js";
import updateSong from "./modules/update-song.js";
import upload from "./modules/upload.js";
import form from "./modules/form.js";
import musicList from "./modules/music-list.js";
import selectSong from "./modules/select-song.js";
import nextSong from "./modules/next-song.js";
import searchMusic from "./modules/search-music.js";


const d=document;

export default function App() {
	const loader= d.createElement("div");
	loader.classList.add("loading");
	loader.innerHTML=`<img src="images/audio.svg" style="margin: 45%;">`;
	d.body.classList.add("no-scroll");
	d.body.appendChild(loader);
	ajax(endpoints.GET,{}, async (data)=>{

	const audio        = await d.querySelector("audio"),
	progress           = d.querySelector(".progress"),
	soundTime          = d.querySelector(".sound-duration"),
	soundName          = d.querySelector(".sound-name"),
	soundArtist        = d.querySelector(".sound-artist"),
	soundYear          = d.querySelector(".sound-year"),
	soundImage         = d.getElementById("music-image"),
	songArr            = await data.items;

	

	let play         = false,
	changingTimeSong = false;
	window.changinMusic     =false;
	window.currentSong      = 0;	
	setTimeout(()=>progress.value=0,100);
	
	const noArtistImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAABlBMVEXJycmcnJyshIZ4AAAB7ElEQVR4nO3bUW7DMAwEUfv+ly4SGEXQ2kksk1xqPXMCvj8BIpeFiIiIiIiIiIiIiIiIiKio9TX1MIOt+6nHOtcBYjbMB8YklC8UM1i+ZjSnnHL0lZxkdKUMMFpSBh3tJMOOXpILjFaUi442ksuOJpIARwtJiKOBJMihl7hAwhxiSaBDKgl1KCUukGCHThIOEUniHRpIgkMjcYGkOBQSIM0kWQ4g3RzVEiBApnPUSoAAAaJzVEqAAAECBAgQIECAzCopdAABAkQoKXUAATKfpNjhA7H5Q+RXtx3EZvPBB2KzHeSzr+WzQWez0+gDsdn79dnE9tmN94HY3I/4XPT43Fj5XL353CEuNpehi8+trs/19GJzz74MSNQDH2fCeGTCeGTCeOah2LJA/OZgICIioq35nygOr9+Phhk0JxCNMQOKhpZhRS/LRUYTSoCigyWMoaWEMnSUcIaGksIQUNIcRjvlhZRkR5UknVFEKXHkS4oY6ZRCR6qk1JEoKXakScodSRKBI0MiYSRQZI5gidARK3GBSB2BErEjTKJmrEESNeKZiyNCohZsuTguS9TjvwSkmeOSRD36n4CoB//X3SHqsXe6N0Q99G53hqhHPghIt1wc5yXqeQ+7K0Q97puAdOueEPWwbwPSLSDd2p34B3GsN/j6gvMWAAAAAElFTkSuQmCC";

	if(data.statusText !="Success"){
		d.querySelector("ul").innerHTML=`<h2 style="margin-left: -2em;">${data.statusText}</h2>`
		d.getElementById("search-song").disabled=true;
		soundName.textContent="n/a";
		soundArtist.textContent ="n/a";
		soundYear.textContent="n/a";
		audio.src = "";
		soundImage.src=noArtistImage;
		setTimeout(()=>soundTime.innerHTML="0:00/0:00",1000);
	}else{
		previusBtn(songArr);
		nextBtn(songArr);
		updateSong(songArr);
		selectSong(songArr);
		nextSong(audio,songArr);
		musicList("ul",songArr)
		deleteMusic(songArr);
		searchMusic(".song");
		
		soundName.textContent   = songArr[0].name||"n/a";
		soundArtist.textContent = songArr[0].artist||"n/a";
		soundYear.textContent   = songArr[0].year||"n/a";
		audio.src               = songArr[0].audio||"";
		soundImage.src          = songArr[0].image||noArtistImage;
		setTimeout(()=>soundTime.innerHTML="0:00/"+calculateTime(audio.duration),1000);


	}
	playHandler(play,audio);
	mute(".volume", audio);
	timeUpdate(audio,changingTimeSong,soundTime,progress);
	hamburgerBtn();
	upload("[for=upload-image]","[for=upload-sound]");
	form();
	})
	
	setTimeout(()=>{	
		d.body.classList.remove("no-scroll");
		d.body.removeChild(loader)
	},1000);
}