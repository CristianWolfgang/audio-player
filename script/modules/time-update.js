import calculateTime from "./calculate-time.js";
const d = document;
export default function timeUpdate(audio,changingTimeSong,soundTime,progress){

	d.addEventListener("input",e=>{	
		if(e.target===progress){
			changingTimeSong=true;
  			audio.currentTime = (progress.value*audio.duration)/100;

		}
	})
	audio.ontimeupdate=e=>{
		if(changingTimeSong===false)progress.value=Math.floor((audio.currentTime*100)/audio.duration);
		if(!window.changinMusic)soundTime.innerHTML=` ${calculateTime(audio.currentTime)}/${calculateTime(audio.duration)}`
		changingTimeSong=false;
	}
}