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

function UnderConstruction() {
    return (
<div>
   <div class="social-container">
       <span class="social-reach">Connect with us through..</span>
      <ul class="social-icons">
         <li><a href="#"><i class="fa fa-instagram"></i></a></li>
         <li><a href="#"><i class="fa fa-tumblr"></i></a></li>
         <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
         <li><a href="#"><i class="fa fa-facebook"></i></a></li>
         <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
      </ul>
      <video class="pc-video" autoPlay playsInline preload muted>
         <source src={crea} type="video/mp4"/>
      </video>
      <audio id="player" autoPlay>
      <source src={audio_crea} type="audio/mpeg"/>
</audio>
   </div>
   <div class="rotateScreen">
      <span>Please rotate your screen for best experience</span>
   </div>
</div>
    );
}

export default UnderConstruction;