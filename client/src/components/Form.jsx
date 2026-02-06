import { useState } from "react";
//import Styles
import "./Form.css";
export default function Form() {
  const [message, setMessage] = useState("");
  const emptyFormState = { title: "", body: "", author: "" };
  // this holds the current state of the controlled form
  const [formData, setFormData] = useState(emptyFormState);

  const handleClick = () => {
    setFormData(emptyFormState);
    setMessage("");
  };
  // Update the state when input values change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    storeFanMail();
    setMessage("We have received your message.");
  };
  const storeFanMail = async () => {
    const response = await fetch("/api/letters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        body: formData.body,
        author: formData.author,
      }),
    });
    const data = response.json();
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit} name="fan-mail">
        <h2>Share your memories of this show :</h2>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Letter Title"
          required
        ></input>
        <textarea
          type="text"
          name="body"
          value={formData.body}
          onChange={handleInputChange}
          placeholder="Share your memory"
          required
        ></textarea>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          placeholder="Pen name"
          required
        ></input>
        <button type="submit">Submit</button>
        {message && (
          <button onClick={handleClick} type="button">
            Reset form
          </button>
        )}
        <p>{message}</p>
      </form>
    </>
  );
}
