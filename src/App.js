import logo from './logo.svg';
import './App.css';
import Homepage from "./components/Homepage/Homepage";
import React from "react";
import Header from "./components/Homepage/Header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import PhotoPage from "./components/PhotoPage/PhotoPage";
import {useLocation} from "react-router";
import DiscoverPage from "./components/DiscoverPage/DiscoverPage";
import LeaderboardPage from "./components/LeaderboardPage/LeaderboardPage";
function App() {

  return (
      <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/photo" element={<PhotoPage/>}/>
                <Route path="/discover" element={<DiscoverPage/>}/>
                <Route path="/leaderboard" element={<LeaderboardPage/>}/>
            </Routes>
        </div>

      </Router>
  );
}

export default App;
