import crea from "../../assets/crea move.mp4"
import "./uc.css"
import rotateScreen from "../../assets/rotate-1.png"
// import ComingSoon from "../comingSoon/ComingSoon.js"


function UnderConstruction() {
    function handleClick(e){
        var els = document.getElementById("play-link");
        var creaVid = document.getElementById("video");
        var reach = document.getElementById("reach");
        var animatedIconsList = document.getElementById("icons").getElementsByTagName("li");
        var toBeRemoved = document.getElementById("btn");
        
        creaVid.play();
        toBeRemoved.remove();
        creaVid.addEventListener("ended", function() {
            for (var i = 0; i < animatedIconsList.length; i++) {
                animatedIconsList[i].classList.add("play");
            }
            reach.classList.add("play");
        })
        
    }
    return (
<div>
   <div class="social-container">
      <span id="reach" class="social-reach">Connect with us through..</span>
      <ul id="icons" class="social-icons">
         <li class="instagram">
            <a href="#">
               <i class="fa fa-instagram"></i>
               <div class="slider">
                  <p>instagram</p>
               </div>
            </a>
         </li>
         <li class="mail">
            <a href="#">
               <i class="fa fa-envelope"></i>
               <div class="slider">
                  <p>mail</p>
               </div>
            </a>
         </li>
         <li class="linkedin">
            <a href="#">
               <i class="fa fa-linkedin"></i>
               <div class="slider">
                  <p>linkedin</p>
               </div>
            </a>
         </li>
         <li class="facebook">
            <a href="#">
               <i class="fa fa-facebook"></i>
               <div class="slider">
                  <p>facebook</p>
               </div>
            </a>
         </li>
         <li class="pinterest">
            <a href="#">
               <i class="fa fa-pinterest"></i>
               <div class="slider">
                  <p>pinterest</p>
               </div>
            </a>
         </li>
         <li class="pinterest">
            <a href="/coming-soon">
               <i class="fa fa-safari"></i>
               <div class="slider">
                  <p>Our website</p>
               </div>
            </a>
         </li>
      </ul>
      {/* <a href="#" onClick={handleClick} id="play-link">Play</a> */}
      <div id="btn">
         <span class="noselect"><a href="#" onClick={handleClick} id="play-link">Play</a></span>
         <div id="circle"></div>
      </div>
      <video id="video" class="pc-video" playsInline>
         <source src={crea} type="video/mp4"/>
      </video>
   </div>
   <div class="rotateScreen">
      <img src={rotateScreen} alt=""/>
   </div>
</div>
    );
}

export default UnderConstruction;