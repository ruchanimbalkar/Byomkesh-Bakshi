import { Routes, Route, Link } from "react-router-dom";
//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import WatchEpisode from "./pages/WatchEpisode";
//import react-switch and react-icons
import Switch from "react-switch";
import { FaMoon } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
//import useState and useEffect
import { useState, useEffect } from "react";
//import styles
import "./App.css";

function App() {
  const [episodes, setEpisodes] = useState([]);
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
  const getAllEpisodes = async () => {
    try {
      //Fetch data from API and wait for it to finish.Save the value returned by the api call in a variable named 'response'.
      const response = await fetch("/api/episodes"); //Getting data from API takes time so we use the await keyword
      //Guard Clause Reference : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      if (!response.ok) {
        console.error(`Response status: ${response.status}`);
        return; // Exit early //Reference : https://dev.to/muthuraja_r/using-guard-clauses-in-asyncawait-a-clean-coding-technique-for-readable-and-maintainable-code-367j
      }
      //convert response into JSON notation wait for this line ' await response.json();' to finish before we move to next line
      const data = await response.json();
      //print data on console
      console.log("data ", data);
      setEpisodes(data);
    } catch (error) {
      console.log("Error Fetching API: " + error);
    }
  };
  //useEffect to fetch data
  useEffect(() => {
    getAllEpisodes();
  }, []);

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
        <Route path="/about" element={<About episodes={episodes} />} />
        <Route
          path="/episode/:episodeNo"
          element={<WatchEpisode episodes={episodes} />}
        />
      </Routes>
    </>
  );
}

export default App;
