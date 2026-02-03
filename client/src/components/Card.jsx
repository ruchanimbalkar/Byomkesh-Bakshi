export default function Card(props) {
  let descriptionP = props.episode.description || "Description not available.";
  return (
    <>
      <h3>
        {" "}
        Season {props.episode.season} | Episode {props.episode.episodeNo}{" "}
      </h3>
      <h4>{props.episode.episodeTitle}</h4>
      <p>{descriptionP}</p>
      {props.children}
    </>
  );
}
