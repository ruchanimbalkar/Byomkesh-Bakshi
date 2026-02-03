//import styles
import "./EpisodeCard.css";
export default function EpisodeCard({ episode }) {
  let descriptionP = episode.description || "Description not available.";
  return (
    <div className="episode-card">
      <h3>
        {" "}
        Season {episode.season} Episode {episode.episodeNo}{" "}
      </h3>
      <p>{descriptionP}</p>
    </div>
  );
}
