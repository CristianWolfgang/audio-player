import ajax from "./ajax.js";
import endpoints from "./endpoints.js";
const d =document;
export default function form(){

	d.addEventListener("submit",e=>{
		if(e.target.matches("#insert-music")){
			e.preventDefault();
			const sound=d.getElementById('upload-sound'),
			artist = d.getElementById("artist").value,
			update =d.getElementById("id").value; 
			if(!update) if(!sound.value) return alert("Insert a song");
			if(!artist) return alert("Insert an artist name");
			const formData = new FormData(e.target);
			let endpoint=null;
			if(update) {
				const artist =((document.getElementById("insert-music"))["sound-artist"]).value;
				endpoint =endpoints.UPDATE;
				formData.append("sound-artist",artist);
			}else{
				endpoint=endpoints.CREATE
			}
			const options ={
				body:formData,
				method:"POST"
			};

			
			ajax(endpoint,options,(data)=>{
				alert(data.statusText);
				setTimeout(()=>location.reload(),1000);				
			});	
				
		}
	})
}