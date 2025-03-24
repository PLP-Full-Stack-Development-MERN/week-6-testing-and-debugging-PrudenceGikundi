import { useEffect, useState } from "react";
import axios from "axios";

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  const fetchBugs = async () => {
    const res = await axios.get("http://localhost:5000/api/bugs");
    setBugs(res.data);
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  return (
    <div>
      <h2>Bug List</h2>
      {bugs.map((bug) => (
        <div key={bug._id}>
          <h3>{bug.title}</h3>
          <p>{bug.description}</p>
          <button onClick={() => axios.delete(`http://localhost:5000/api/bugs/${bug._id}`)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BugList;
