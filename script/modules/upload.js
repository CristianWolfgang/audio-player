const d=document;
export default function upload(labelImg,labelSound){
	labelImg = d.querySelector(labelImg);
	labelSound = d.querySelector(labelSound);
	

	let songNameWithFormat,
	songName,
	mySongName;
	d.addEventListener("change",e=>{
		if(e.target.matches("#upload-image")){
			const imgSrc= URL.createObjectURL(e.target.files[0]);
			labelImg.innerHTML=`<img src="${imgSrc}" class="uploaded-img"/>`;
		}
		if(e.target.matches("#upload-sound")){
			songNameWithFormat=e.target.files[0].name;
			labelSound.innerHTML=songNameWithFormat;
			songName = songNameWithFormat.slice(0,songNameWithFormat.lastIndexOf("."));
			mySongName= d.querySelector("[name=sound-name]").value;
			if(!mySongName)d.querySelector("[name=sound-name]").value=songName;
		}
	});

	
	
}