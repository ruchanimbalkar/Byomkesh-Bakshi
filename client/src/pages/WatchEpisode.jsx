//import useParams and use it to access the URL parameter called episodeNumber
import { useParams } from "react-router-dom";
//import components
import Card from "../components/Card.jsx";
import Video from "../components/Video.jsx";
export default function WatchEpisode({ episodes }) {
  //get the episode number from the URL parameter
  const episodeName = useParams().episodeTitle;
  console.log("episodeName : ", episodeName);
  let episodeDetails = episodes.find(
    (episode) => episode.episodeTitle == episodeName
  );
  console.log("episodeDetails", episodeDetails);

  return (
    <main>
      <Card episode={episodeDetails}>
        <Video videoLink={episodeDetails.youTubeEmbedLink} />
      </Card>
    </main>
  );
}
