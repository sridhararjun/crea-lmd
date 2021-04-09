import "./App.css";
import { Switch,Route } from "react-router-dom";
import Choose from "./components/choose/Choose";
import VideoSite from "./components/underConstruction/UnderConstruction";
import ComingSoon from "./components/comingSoon/ComingSoon";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Choose} exact/>
        <Route path="/choose" component={Choose} exact/>
        <Route path="/site" component={VideoSite} exact/>
        <Route path="/coming-soon" component={ComingSoon} exact/>
      </Switch>
    </main>
  );
}

export default App; 