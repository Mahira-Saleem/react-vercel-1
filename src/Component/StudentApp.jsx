
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addStudent,
  deleteStudent
} from "../Redus/StudentSlice";

function StudentApp() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const students = useSelector(
    (state) => state.students.students
  );

  const dispatch = useDispatch();

  const handleAddStudent = (e) => {
    e.preventDefault();

    if (!name.trim() || !age || Number(age) <= 0) {
      setError("Please enter a valid name and age!");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      age: Number(age)
    };

    dispatch(addStudent(newStudent));

    setName("");
    setAge("");
    setError("");
  };

  const handleDeleteStudent = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div className="app-container">
      <div className="app-card">

        <h1 className="app-title">
          Student Management
        </h1>

        <p className="counter-badge">
           Total Students: {students.length}
        </p>

        <form onSubmit={handleAddStudent}>

          <input
            type="text"
            className="form-input"
            placeholder=" Enter student name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
          />

          <input
            type="number"
            className="form-input"
            placeholder=" Enter student age"
            value={age}
            min="1"
            onChange={(e) => {
              setAge(e.target.value);
              setError("");
            }}
          />

          {error && (
            <p style={{
              color: "#ef476f",
              fontWeight: 800,
              fontSize: "13px",
              marginBottom: "14px"
            }}>
               {error}
            </p>
          )}

          <button
            type="submit"
            className="btn-primary"
          >
            + Add New Student
          </button>

        </form>

        <h2 className="section-title">
           Students List
        </h2>

        <div className="student-list">

          {students.length === 0 ? (

            <p style={{
              textAlign: "center",
              fontWeight: 800
            }}>
              No students found. Add your first student!
            </p>

          ) : (

            students.map((student, index) => (

              <div
                className="student-card"
                key={student.id}
              >

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px"
                }}>

                  <div className="student-info">
                    <h3 className="student-name">
                      {student.name}
                    </h3>

                    <p className="student-age">
                      Age: {student.age} years
                    </p>
                  </div>

                </div>

                <button
                  className="btn-delete"
                  onClick={() =>
                    handleDeleteStudent(student.id)
                  }
                  aria-label={`Delete ${student.name}`}
                >
                  ✕ Delete
                </button>

              </div>

            ))

          )}

        </div>

      </div>
    </div>
  );
}

export default StudentApp;
