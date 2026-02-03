//import styles
import "./EpisodeCard.css";
//import Link from react-router-dom
import { Link } from "react-router-dom";
//import components
import Card from "../components/Card.jsx";
export default function EpisodeCard({ episode }) {
  return (
    <Link to={`/episode/${episode.episodeTitle}`}>
      <div className="tooltip episode-card">
        <Card episode={episode} />
      </div>
      <span className="tooltiptext">Click to watch this episode</span>
    </Link>
  );
}
