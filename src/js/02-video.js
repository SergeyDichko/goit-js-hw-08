
import throttle from "lodash.throttle";
import Vimeo from "@vimeo/player";

const iframe = document.querySelector("#vimeo-player");
const player = new Vimeo(iframe);
const STORAGE_KEY = "videoplayer-current-time";

const onPlay = function() {
    player.getCurrentTime().then(function(seconds) {
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seconds));
         
    }).catch(function(error) {
        error.message;
    
    }); 
};

const savedSeconds = localStorage.getItem(STORAGE_KEY,);
const parsedSconds = JSON.parse(savedSeconds);

player.setCurrentTime(parsedSconds).then(function() { 
   
}).catch(function(error) {
    
});

player.on('timeupdate', throttle(onPlay, 1000));