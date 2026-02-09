import "./LetterCard.css";
export default function LetterCard({ letter }) {
  return (
    <>
      <div className="letter-card">
        <h3 className="greeting">Hello, Mr. Bakshi!</h3>

        <p className="subject">Subject : {letter.title}</p>

        <p className="body">{letter.body}</p>

        <p className="sign-off">
          Thank you,
          <br></br>
          {letter.author}.
        </p>
        <hr></hr>
      </div>
    </>
  );
}
