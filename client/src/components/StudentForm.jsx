import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [students, setStudents] = useState([]);
  const [studentEditId, setStudentEditId] = useState(null);

  const token = localStorage.getItem("token");

  const API_URL = import.meta.env.VITE_API_URL;

  async function submitHandler(e) {
    e.preventDefault();

    try {
      if (studentEditId) {
        const studentData = {
          name,
          course,
        };

        const res = await fetch(`${API_URL}/students/${studentEditId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(studentData),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "Failed to update student");
        }

        const updatedStudent = students.map((student) =>
          student._id === studentEditId ? data.updatedStudent : student,
        );

        setStudents(updatedStudent);
        setStudentEditId(null);
      } else {
        const studentData = {
          name,
          course,
        };
        const res = await fetch(`${API_URL}/students`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(studentData),
        });

        if (!res.ok) {
          throw new Error("Student was not added");
        }

        const data = await res.json();

        setStudents((prev) => [...prev, data.student]);
      }

      setName("");
      setCourse("");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function getAllStudents() {
      try {
        const res = await fetch(`${API_URL}/students`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch students");
        }
        const data = await res.json();

        setStudents(data.allStudent);
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudents();
  }, []);

  async function deleteHandler(id) {
    try {
      const res = await fetch(`${API_URL}/students/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error("Student was not found");
      }
      const data = await res.json();

      const removeStudent = students.filter((student) => student._id !== id);
      setStudents(removeStudent);
    } catch (error) {
      console.log(error.message);
    }
  }

  function editHandler(student) {
    setStudentEditId(student._id);
    setName(student.name);
    setCourse(student.course);
  }

  return (
    <>
      <form onSubmit={submitHandler} className="student-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button type="submit">
          {studentEditId ? "Update Student" : " Add Student"}
        </button>
      </form>
      <div>
        {students.map((student) => (
          <div key={student._id} className="student-container">
            <h2>{student.name} -</h2>
            <p>{student.course}</p>
            <button onClick={() => editHandler(student)}> Edit</button>
            <button onClick={() => deleteHandler(student._id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default StudentForm;
