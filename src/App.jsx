import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/student")
      .then((res) => res.json())
      .then((data) => setStudent(data));
  }, []);

  return (
    <div className="card">
      <h1>Student Details</h1>

      {student && (
        <>
          <h2>{student.name}</h2>
          <p>Course: {student.course}</p>
        </>
      )}
    </div>
  );
}

export default App;