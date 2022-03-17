const d= document;
export default function updateSong(songArr){
	d.addEventListener("click",e=>{

		if(e.target.matches(".icon-cog")){

			
			d.querySelector(".hamburger").classList.add("is-active");
			d.querySelector("#panel").classList.add("active");
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
			const noArtistImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAABlBMVEXJycmcnJyshIZ4AAAB7ElEQVR4nO3bUW7DMAwEUfv+ly4SGEXQ2kksk1xqPXMCvj8BIpeFiIiIiIiIiIiIiIiIiKio9TX1MIOt+6nHOtcBYjbMB8YklC8UM1i+ZjSnnHL0lZxkdKUMMFpSBh3tJMOOXpILjFaUi442ksuOJpIARwtJiKOBJMihl7hAwhxiSaBDKgl1KCUukGCHThIOEUniHRpIgkMjcYGkOBQSIM0kWQ4g3RzVEiBApnPUSoAAAaJzVEqAAAECBAgQIECAzCopdAABAkQoKXUAATKfpNjhA7H5Q+RXtx3EZvPBB2KzHeSzr+WzQWez0+gDsdn79dnE9tmN94HY3I/4XPT43Fj5XL353CEuNpehi8+trs/19GJzz74MSNQDH2fCeGTCeGTCeOah2LJA/OZgICIioq35nygOr9+Phhk0JxCNMQOKhpZhRS/LRUYTSoCigyWMoaWEMnSUcIaGksIQUNIcRjvlhZRkR5UknVFEKXHkS4oY6ZRCR6qk1JEoKXakScodSRKBI0MiYSRQZI5gidARK3GBSB2BErEjTKJmrEESNeKZiyNCohZsuTguS9TjvwSkmeOSRD36n4CoB//X3SHqsXe6N0Q99G53hqhHPghIt1wc5yXqeQ+7K0Q97puAdOueEPWwbwPSLSDd2p34B3GsN/j6gvMWAAAAAElFTkSuQmCC";

			
			const imgSrc = song.image;
			form.querySelector("[for=upload-image]").innerHTML=`<img src='${imgSrc||noArtistImage}' class='uploaded-img'>`;
			
			d.body.classList.add("no-scroll");
			
			scroll(0,0);

		}
	})
}