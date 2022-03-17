import selectMusic from "./select-current-music.js";
const d=document;
export default function selectSong(songArr){

	d.addEventListener("click",e=>{

		if(e.target.matches(".song" || e.target.matches(".song *"))){
			window.currentSong=e.target.getAttribute("data-id")|| e.target.parentElement.getAttribute("data-id");
						
			selectMusic(songArr[window.currentSong]);
		}
	})
}