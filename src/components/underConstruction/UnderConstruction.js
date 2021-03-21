import pcvideo from "../../assets/creaweb.mp4";
import mobilevideo from "../../assets/final whatsapp.mp4";
import "./UnderConstruction.css"

function UnderConstruction() {
    return (
        <div class="row">
    <ul class="left">
        <li><a href="#" class="fa fa-facebook"></a></li>
        <li class="left"><a href="#" class="fa fa-google"></a></li>
        <li class="left"><a href="#" class="fa fa-linkedin"></a></li>
        </ul>
        <ul class="right">
        <li class="right"><a href="#" class="fa fa-instagram"></a></li>
        <li class="right"><a href="#" class="fa fa-pinterest"></a></li>
        <li class="right"><a href="#" class="fa fa-pinterest"></a></li>
        </ul>
        <video class="pc-video" autoPlay playsInline preload="auto" muted>
            <source src={pcvideo} type="video/mp4"/>
        </video>
        <video class="mobile-video" autoPlay muted>
        <source src={mobilevideo} type="video/mp4"/>
        </video>
        </div>
    );
}

export default UnderConstruction;