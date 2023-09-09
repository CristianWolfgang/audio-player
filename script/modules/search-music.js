const d = document;
export default function searchMusic(selector){
    
    const searchBar = d.getElementById("search-song"),
    list = d.querySelectorAll(selector);
    
    d.addEventListener("keyup",e=>{
        if(e.target===searchBar){
            const keyword = searchBar.value.toLowerCase();
            let notSongs = false;
            if(keyword){
                
                list.forEach(el=>{
                    const songName = el.querySelector(".song-name").textContent.toLowerCase(),
                    songArtist = el.getAttribute("data-artist").toLowerCase();
                    
                    if(songArtist.includes(keyword) || songName.includes(keyword)){
                       el.classList.remove("filter"); 
                       notSongs=true;
                    }else{

                        el.classList.add("filter");
                    }
                });
                
               (!notSongs)? d.getElementById("no-songs").classList.remove("filter"):d.getElementById("no-songs").classList.add("filter")            

            }else{
                list.forEach(el=>el.classList.remove("filter"));
            }
        }
    });
    

}