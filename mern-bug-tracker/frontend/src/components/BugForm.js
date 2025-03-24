import { useState } from "react";
import axios from "axios";

const BugForm = ({ fetchBugs }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitBug = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/bugs", { title, description });
    fetchBugs();
  };

  return (
    <form onSubmit={submitBug}>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Report Bug</button>
    </form>
  );
};

export default BugForm;
