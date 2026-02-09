import "./LetterCard.css";
export default function LetterCard({ letter }) {
  return (
    <>
      <div className="letter-card">
        <h3 className="letter-title">{letter.title}</h3>
        <p className="body">{letter.body}</p>
        <h4 className="author">-{letter.author}</h4>
      </div>
    </>
  );
}
