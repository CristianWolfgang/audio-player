import selectMusic from "./select-current-music.js";
const d=document;

export default function nextBtn(songArr){
    d.addEventListener("click",e=>{
    if(e.target.matches(".next-song") ||e.target.matches(".next-song *")){

            window.currentSong++;

            if(window.currentSong === songArr.length) window.currentSong = 0;
            selectMusic(songArr[window.currentSong]);
        }
    });
    
    }