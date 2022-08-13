import checkMediaQuery from "./check-mq.js";
const d= document;
export default function updateSong(songArr){
	d.addEventListener("click",e=>{

		if(e.target.matches(".icon-cog")){
			checkMediaQuery({
				strMediaQuery:"(min-width:768px)", //screen width of 768px or higher
				reject:()=>{
					d.body.classList.toggle("no-scroll");
					scroll(0,0);
				}
			});
			d.querySelector(".hamburger").classList.add("is-active");
			d.getElementById("panel").classList.add("active");
			const li = e.target.parentElement,
			action = d.getElementById('action'),
			form = d.getElementById('insert-music');

			const song = songArr[li.getAttribute("data-id")];
			
			action.innerHTML="Update "+song.name;
			form["sound-name"].value=song.name;
			form["sound-artist"].value=song.artist;
			form["sound-artist"].disabled=true;
			form["sound-year"].value=song.year;
			form["id"].value=song.id;
			form.querySelector("[for=upload-sound]").innerHTML=song.name;
			const noArtistImage = "./images/no-img.png";

			
			const imgSrc = song.image;
			form.querySelector("[for=upload-image]").innerHTML=`<img src='${imgSrc||noArtistImage}' class='uploaded-img'>`;
			

		}
	})
}