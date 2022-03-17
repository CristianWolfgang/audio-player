import selectMusic from "./select-current-music.js";
const d=document;

export default function previusBtn(songArr){
d.addEventListener("click",e=>{
	if(e.target.matches(".previous-song") ||e.target.matches(".previous-song *") ){

		window.currentSong--;
		
		if(window.currentSong < 0) window.currentSong = songArr.length-1
		selectMusic(songArr[window.currentSong]);
	}
})

}