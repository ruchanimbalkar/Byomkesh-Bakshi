//import useState and useEffect
import { useState, useEffect } from "react";
//import components
import LetterCard from "../components/LetterCard.jsx";
import Form from "../components/Form.jsx";
export default function MemoryLane() {
  const [letters, setLetters] = useState([]);
  const popover = (
    <div id="letter-popover" popover="auto">
      <Form />
      <button
        id="x"
        type="button"
        commandfor="letter-popover"
        command="hide-popover"
      >
        Close
      </button>
    </div>
  );
  const getAllLetters = async () => {
    try {
      //Fetch data from API and wait for it to finish.Save the value returned by the api call in a variable named 'response'.
      const response = await fetch("/api/letters"); //Getting data from API takes time so we use the await keyword
      //Guard Clause Reference : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      if (!response.ok) {
        console.error(`Response status: ${response.status}`);
        return; // Exit early //Reference : https://dev.to/muthuraja_r/using-guard-clauses-in-asyncawait-a-clean-coding-technique-for-readable-and-maintainable-code-367j
      }
      //convert response into JSON notation wait for this line ' await response.json();' to finish before we move to next line
      const data = await response.json();
      //print data on console
      console.log("data ", data);
      setLetters(data);
    } catch (error) {
      console.log("Error Fetching API: " + error);
    }
  };
  //useEffect to fetch data
  useEffect(() => {
    getAllLetters();
  }, []);

  return (
    <>
      {letters.map((letter, index) => (
        <LetterCard letter={letter} key={"index_" + index} />
      ))}
      <button
        className="popover-button"
        type="button"
        commandfor="letter-popover"
        command="toggle-popover"
      >
        Share your memory
      </button>
      {popover}
    </>
  );
}
