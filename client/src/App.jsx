import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Switch from "react-switch";
import { FaMoon } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

import { useState } from "react";
import "./App.css";

function App() {
  let filledMoonCrescent = <FaMoon />;
  let emptyMoonCrescent = <FaRegMoon />;
  const [lightMode, setLightMode] = useState(true);
  const handleChange = () => {
    setLightMode(!lightMode);
    let mode = lightMode ? "day" : "night";
    document.body.classList.remove("day");
    document.body.classList.remove("night");
    document.body.classList.add(mode);
  };

  return (
    <>
      <header>
        <h1>Byomkesh Bakshi</h1>
        <h2>सत्यन्वेषी </h2>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch
          onChange={handleChange}
          checked={lightMode}
          offColor="#4d4d4d"
          onColor="#999999"
          offHandleColor="#262626"
          onHandleColor="#e6e6e6"
          checkedIcon={emptyMoonCrescent}
          uncheckedIcon={filledMoonCrescent}
        />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
