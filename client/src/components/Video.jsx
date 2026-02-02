export default function Video({ youTubeLink }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video width="250">
        <source src={youTubeLink} type="video/mp4" />
      </video>
    </>
  );
}
