import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./pages/home";
import Club from "./pages/Clubs";
import CodeChef from "./Components/CodeChef";

// Individual club components
import Alekh from "./Components/Alekh";
import Aero from "./Components/Aero";
import AutoSports from "./Components/AutoSports";
import GDSC from "./Components/GDSC";
import DigitalDesign from "./Components/DigitalDesign";
import Drama from "./Components/Drama";
import ForeignLanguage from "./Components/ForeignLanguage";
import Girlscript from "./Components/Girlscript";
import IgnitedMinds from "./Components/IgnitedMinds";
import MozillaClub from "./Components/MozillaClub";
import CreatePass from "./Components/CreatePass";
import Skills from "./Components/Skills";
import FindClub from "./Components/FindClub";
import Dummy from "./pages/dummy";

function App() {
  return (
    <div>
      <Navbar title="CLUB ELITE" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/club" element={<Sidebar />} />
        <Route path="/club/aalekh" element={<Alekh />} />
        <Route path="/club/aero" element={<Aero />} />
        <Route path="/club/autosports-club" element={<AutoSports />} />
        <Route path="/club/codechef" element={<CodeChef />} />
        <Route path="/club/gdsc" element={<GDSC />} />
        <Route path="/club/digital-design" element={<DigitalDesign />} />
        <Route path="/club/drama-club" element={<Drama />} />
        <Route path="/club/foreign-language-club" element={<ForeignLanguage />} />
        <Route path="/club/girlscript" element={<Girlscript />} />
        <Route path="/club/ignited-minds" element={<IgnitedMinds />} />
        <Route path="/club/mozilla" element={<MozillaClub />} />
        <Route path="/club/confirm" element={<CreatePass />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/find_club" element={<FindClub />} />
      </Routes>
    </div>
  );
}

export default App;
