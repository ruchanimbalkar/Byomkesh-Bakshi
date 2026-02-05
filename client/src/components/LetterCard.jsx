import "./LetterCard.css";
export default function LetterCard({ letter }) {
  return (
    <>
      <div className="letter-div">
        <h3>{letter.title}</h3>
        <p>{letter.body}</p>
        <h4>-{letter.author}</h4>
      </div>
    </>
  );
}
