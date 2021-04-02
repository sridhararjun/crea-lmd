import pcvideo from "../../assets/creaweb.mp4";
import mobilevideo from "../../assets/final whatsapp.mp4";
import crea from "../../assets/crea move.mp4"
// import "./UnderConstruction.css"
import "./uc.css"
import facebook from "../../assets/fB.png"
import instagram from "../../assets/insta.png"
import pinterest from "../../assets/pin.png"
import tumblr from "../../assets/tumblr.png"
import youtube from "../../assets/youtube.png"
import audio_crea from "../../assets/crea-audio.mp3"

// window.onload = function(){
//     var els = document.getElementsByClassName("play-link");
//     var creaVid = document.getElementsByClassName("pc-video");
//     els.addEventListener('click', function(e) {
//         e.target.previousElementSibling.classList.add('play');
//         return false;
//     });
//     creaVid.addEventListener("click",function(e){
//         if(creaVid.paused==true){
//             creaVid.play();
//         }
//     });
    
// }

function UnderConstruction() {
    function handleClick(e){
        var els = document.getElementById("play-link");
        var creaVid = document.getElementById("video");
        var reach = document.getElementById("reach");
        var animatedIconsList = document.getElementById("icons").getElementsByTagName("li");
        for(var i=0;i<animatedIconsList.length;i++){
            animatedIconsList[i].classList.add("play");
        }
        reach.classList.add("play");
        creaVid.play();
    }
    return (
<div>
   <div class="social-container">
      <span id="reach" class="social-reach">Connect with us through..</span>
      <ul id="icons" class="social-icons">
         <li><a href="#"><i class="fa fa-instagram"></i></a></li>
         <li><a href="#"><i class="fa fa-envelope"></i></a></li>
         <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
         <li><a href="#"><i class="fa fa-facebook"></i></a></li>
         <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
      </ul>
      <a href="#" onClick={handleClick} id="play-link">Play</a>
      <video id="video" class="pc-video" playsInline>
         <source src={crea} type="video/mp4"/>
      </video>
   </div>
   <div class="rotateScreen">
      <span>Please rotate your screen for best experience</span>
   </div>
</div>
    );
}

export default UnderConstruction;