import "./Choose.css";
import logo from "../../assets/crea-logo.jpeg";

function Choose() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="/site" class="btn-liquid">
                <button type="button" class="button-two">
            <span>Proceed To Website</span>
                </button>
          </a>
          <img src={logo} className="App-logo" alt="logo" />
          <a className=".sub-main" href="mailto:sridharmuraleedar@gmail.com" class="btn-liquid">
                <button type="button" class="button-two">
                    <span>Mail Us</span>
                </button>
          </a>
        </header>
      </div>
    );
  }

export default Choose;