
const d= document,
soundName          = d.querySelector(".sound-name"),
soundArtist        = d.querySelector(".sound-artist"),
soundYear          = d.querySelector(".sound-year"),
soundImage         = d.getElementById("music-image"),
progress           = d.querySelector(".progress"),
audio        = d.querySelector("audio");

    export default function selectMusic(songObj){
        progress.disabled=true;
        progress.value=0;

        window.changingMusic=true;
        const name = songObj.name,
        artist = songObj.artist;
            
        if(name.lenght >20){
            name = name.slice(0,17);
            name+="...";
        }
        
        if(artist !=null){
            if(artist.lenght >15){
                artist = artist.slice(0,-3);
                artist+="...";
            }
        }
        const noArtistImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAABlBMVEXJycmcnJyshIZ4AAAB7ElEQVR4nO3bUW7DMAwEUfv+ly4SGEXQ2kksk1xqPXMCvj8BIpeFiIiIiIiIiIiIiIiIiKio9TX1MIOt+6nHOtcBYjbMB8YklC8UM1i+ZjSnnHL0lZxkdKUMMFpSBh3tJMOOXpILjFaUi442ksuOJpIARwtJiKOBJMihl7hAwhxiSaBDKgl1KCUukGCHThIOEUniHRpIgkMjcYGkOBQSIM0kWQ4g3RzVEiBApnPUSoAAAaJzVEqAAAECBAgQIECAzCopdAABAkQoKXUAATKfpNjhA7H5Q+RXtx3EZvPBB2KzHeSzr+WzQWez0+gDsdn79dnE9tmN94HY3I/4XPT43Fj5XL353CEuNpehi8+trs/19GJzz74MSNQDH2fCeGTCeGTCeOah2LJA/OZgICIioq35nygOr9+Phhk0JxCNMQOKhpZhRS/LRUYTSoCigyWMoaWEMnSUcIaGksIQUNIcRjvlhZRkR5UknVFEKXHkS4oY6ZRCR6qk1JEoKXakScodSRKBI0MiYSRQZI5gidARK3GBSB2BErEjTKJmrEESNeKZiyNCohZsuTguS9TjvwSkmeOSRD36n4CoB//X3SHqsXe6N0Q99G53hqhHPghIt1wc5yXqeQ+7K0Q97puAdOueEPWwbwPSLSDd2p34B3GsN/j6gvMWAAAAAElFTkSuQmCC";
        soundName.textContent=name||"n/a";
        soundArtist.textContent=artist||"n/a";
        soundYear.textContent=songObj.year||"n/a";
        soundImage.src=songObj.image||noArtistImage;


        audio.src= songObj.audio;

        audio.play();
        setTimeout(()=>window.changingMusic=false,100);
        setTimeout(()=>progress.disabled=false,1000);
    }