// pages/About.jsx
import EpisodeCard from "../components/EpisodeCard.jsx";
import Video from "../components/Video.jsx";
import { useState, useEffect } from "react";

export default function About() {
  const [episodes, setEpisodes] = useState([]);
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
      <h2>Byomkesh Bakshi Episodes</h2>
      {episodes.map((episode, index) => (
        <EpisodeCard episode={episode} key={"index_" + index} />
      ))}
    </>
  );
}
