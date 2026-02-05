export default function LetterCard({ letter }) {
  return (
    <>
      <h3>{letter.title}</h3>
      <p>{letter.body}</p>
      <h4>{letter.author}</h4>
    </>
  );
}
