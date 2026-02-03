//import useParams and use it to access the URL parameter called episodeNumber
import { useParams } from "react-router-dom";
import Video from "../components/Video.jsx";
export default function WatchEpisode({ episodes }) {
  //get the episode number from the URL parameter
  const episodeNumber = useParams().episodeNo;
  console.log("episodeNumber : ", episodeNumber);
  let episodeDetails = episodes.find(
    (episode) => episode.episodeNo == episodeNumber
  );
  console.log("episodeDetails", episodeDetails);
  return (
    <main>
      <Video videoLink={episodeDetails.youTubeEmbedLink} />
    </main>
  );
}
