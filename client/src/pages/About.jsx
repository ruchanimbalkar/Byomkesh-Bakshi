// pages/About.jsx
import EpisodeCard from "../components/EpisodeCard.jsx";

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
