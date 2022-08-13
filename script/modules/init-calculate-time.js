import calculateTime from "./calculate-time.js";
export default function setTime(audioTag){
    
    audioTag.addEventListener("loadedmetadata",(e)=>{
        const duration = calculateTime(audioTag.duration);
        document.querySelector(".sound-duration").innerHTML = "0:00/"+duration;
    });
}