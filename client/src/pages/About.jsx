// pages/About.jsx
import EpisodeCard from "../components/EpisodeCard.jsx";
import Video from "../components/Video.jsx";
import { useState, useEffect } from "react";

export default function About({ episodes }) {
  return (
    <>
      <h2>Byomkesh Bakshi Episodes</h2>
      {episodes.map((episode, index) => (
        <EpisodeCard episode={episode} key={"index_" + index} />
      ))}
    </>
  );
}
