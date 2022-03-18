const d =document;
export default function musicList(container,list){
	const fragment = d.createDocumentFragment(),
	musicContainer = d.querySelector(container);
	list.forEach((obj, index)=>{
		const li = d.createElement("li");
		
		li.classList.add("song");
		li.setAttribute("data-id",index);
		li.setAttribute("data-artist",obj.artist);
		let songName = obj.name||"n/a",
		noArtistImage = "./images/blank-profile-picture-g8a1c040e5_640.png";
		
		
		li.innerHTML+=`<img src="${(obj.image|| noArtistImage)}" class="song-image"><span class="song-name">${songName}</span> &nbsp;<i class="icon-trash"></i>&nbsp; <i class="icon-cog"></i>`
		
		fragment.appendChild(li);
	});


	musicContainer.appendChild(fragment);
}