const d=document;
export default function playHandler(play,audio){
	d.addEventListener("click",e=>{
		if(e.target.matches(".play-song") ||e.target.matches(".play-song *")){
			if(play){
				audio.pause();
			}else{
				audio.play();	
			}
			play=!play
		}
	})
}