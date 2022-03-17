const d=document;
export default function mute(element,audio){
d.addEventListener("click",e=>{
	if(e.target.matches(element)){
		e.target.classList.toggle("icon-volume-on");
		e.target.classList.toggle("icon-volume-off");
		audio.volume=(audio.volume===1)?0:1;
	}
})
}