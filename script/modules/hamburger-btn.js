import checkMediaQuery from "./check-mq.js";
const d=document;
export default function hamburgerBtn(){

	d.addEventListener("click",e=>{
		if(e.target.matches(".hamburger") || e.target.matches(".hamburger *")){
			d.querySelector(".hamburger").classList.toggle("is-active");
			checkMediaQuery({
				strMediaQuery:"(min-width:768px)", //screen width of 768px or higher
				reject:()=>{
					d.body.classList.toggle("no-scroll");
					scroll(0,0);
				}
			});
			d.getElementById('panel').classList.toggle("active");
			
			const action = d.getElementById('action'),
			form = d.getElementById('insert-music');
			setTimeout(()=>{
				action.innerHTML="Add a new song";
				form["sound-name"].value="";
				form["sound-artist"].value="";
				form["sound-artist"].disabled=false;
				form["sound-year"].value="";
				form["id"].value="";
				form.querySelector("[for=upload-image]").innerHTML="Upload image";
				form.querySelector("[for=upload-sound]").innerHTML="Upload sound *";
			},500);

			window.update = false;
		}
	});
}