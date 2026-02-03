//import styles
import "./EpisodeCard.css";
//import Link from react-router-dom
import { Link } from "react-router-dom";
export default function EpisodeCard({ episode }) {
  let descriptionP = episode.description || "Description not available.";
  return (
    <Link to={`/episode/${episode.episodeNo}`}>
      <div className="episode-card">
        <h3>
          {" "}
          Season {episode.season} | Episode {episode.episodeNo}{" "}
        </h3>
        <p>{descriptionP}</p>
      </div>
      <div className="hidden">
        <p>Click to watch this episode </p>
      </div>
    </Link>
  );
}
