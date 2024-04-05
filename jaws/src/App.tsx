import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./pages/mainPage";
import { AwardsPage } from "./pages/awardsPage";
import { CommunityPage } from "./pages/communityPage";
import { JourneyPage } from "./pages/journeyPage";
import { EcoTrackingPage } from "./pages/ecoTrackingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={MainPage} />
        <Route path="/awards" Component={AwardsPage} />
        <Route path="/community" Component={CommunityPage} />
        <Route path="/journey" Component={JourneyPage} />
        <Route path="/ecotracking" Component={EcoTrackingPage} />
        <Route Component={MainPage} />
      </Routes>
    </Router>
  );
}

export default App;
