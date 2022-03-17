export default function removeNoScrollClass(){
    window.onresize=e=>{
        const screenWidth = window.innerWidth,
        constainsNoScrollClass = document.body.classList.contains("no-scroll"),
        panelIsActive =document.getElementById("panel").classList.contains("active");
        console.log(screenWidth)
        if(screenWidth>=768 && constainsNoScrollClass){
            document.body.classList.remove("no-scroll");
        }else if(screenWidth<768 && !constainsNoScrollClass && panelIsActive){
            document.body.classList.add("no-scroll");
        }
    }
}