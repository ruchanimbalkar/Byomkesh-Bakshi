import { useState } from "react";
//import Styles
import "./Form.css";
export default function Form() {
  const emptyFormState = { title: "", description: "", author: "" };
  // this holds the current state of the controlled form
  const [formData, setFormData] = useState(emptyFormState);
  // Update the state when input values change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    storeFanMail();
    setFormData(emptyFormState);
  };
  const storeFanMail = async () => {
    const response = await fetch("/api/add-one-memory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        body: formData.description,
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
          name="description"
          value={formData.description}
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
      </form>
    </>
  );
}
