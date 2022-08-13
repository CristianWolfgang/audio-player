import selectMusic from "./select-current-music.js";
const d = document;

export default function nextSong(audio,songArr){
    audio.addEventListener("ended",e=>{
        window.currentSong++;
        if(window.currentSong === songArr.length) window.currentSong = 0;
        selectMusic(songArr[window.currentSong]);
    });
}