import pcvideo from "../../assets/creaweb.mp4";
import mobilevideo from "../../assets/final whatsapp.mp4";
import crea from "../../assets/crea move.mp4"
import "./UnderConstruction.css"

function UnderConstruction() {
    return (
        <div>
        <div class="videoContainer">
            <ul>
                <li><a href="/site" class="btn-liquid"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png"/><span></span></a></li>
                <li><a href="/site" class="btn-liquid"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png"/></a></li>
                <li><a href="/site" class="btn-liquid"><img src="https://img.icons8.com/bubbles/100/000000/pinterest.png"/></a></li>
                <li><a href="/site" class="btn-liquid"><img src="https://img.icons8.com/bubbles/100/000000/apple-mail.png"/></a></li>
                <li><a href="/site" class="btn-liquid"><img src="https://img.icons8.com/bubbles/100/000000/linkedin.png"/></a></li>
            </ul>

        <video class="pc-video" autoPlay playsInline preload="auto" muted>
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