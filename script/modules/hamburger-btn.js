const d=document;
export default function hamburgerBtn(update){
	d.addEventListener("click",e=>{
		if(e.target.matches(".hamburger") || e.target.matches(".hamburger *")){
			d.querySelector(".hamburger").classList.toggle("is-active");

			
			d.body.classList.toggle("no-scroll")
			
			window.scroll(0,0);
			
			d.getElementById('panel').classList.toggle("active");
			
			const action = d.getElementById('action'),
			form = d.getElementById('insert-music');
			
			action.innerHTML="Add a new song";
			form["sound-name"].value="";
			form["sound-artist"].value="";
			form["sound-artist"].disabled=false;
			form["sound-year"].value="";
			form["id"].value=""

			form.querySelector("[for=upload-image]").innerHTML="Upload image";
		
			form.querySelector("[for=upload-sound]").innerHTML="Upload sound *";
			window.update = false;
		}
	});
}