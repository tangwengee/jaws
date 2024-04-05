import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProgressPage } from "./pages/progressPage";
import { AwardsPage } from "./pages/awardsPage";
import { CommunityPage } from "./pages/communityPage";
import { JourneyPage } from "./pages/journeyPage";
import { EcoTrackingPage } from "./pages/ecoTrackingPage";
import { GoalsPage } from "./pages/goalsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={ProgressPage} />
        <Route path="/awards" Component={AwardsPage} />
        <Route path="/community" Component={CommunityPage} />
        <Route path="/journey" Component={JourneyPage} />
        <Route path="/ecotracking" Component={EcoTrackingPage} />
        <Route path="/goals" Component={GoalsPage} />
        <Route Component={ProgressPage} />
      </Routes>
    </Router>
  );
}

export default App;
