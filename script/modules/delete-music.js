import ajax from "./ajax.js";
import endpoints from "./endpoints.js";
const d =document;
export default function deleteMusic(songArr){
	d.addEventListener("click",e=>{
		if(e.target.matches(".icon-trash")){
			if(confirm("Are you sure you want to delete this music?")){
				const idSong = e.target.parentElement.getAttribute("data-id"),
				song= songArr[idSong];
				
				ajax(endpoints.DELETE,{
					method:"DELETE",
					body:JSON.stringify({
						id:song.id,
						artist:song.artist
					}),
					header:{
						"Content-type":"application/json"
					}
					
				},(data)=>{
					alert(data.statusText);
				setTimeout(()=>location.reload(),1000);
				})			
			}		
		}
	})
	
}