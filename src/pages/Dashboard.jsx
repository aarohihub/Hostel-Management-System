import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RiEdit2Line, RiDeleteBin2Line } from "react-icons/ri";
import "./Dashboard.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Dashboard = () => {
  const [suc, setSuc] = useState();
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:3005/dashboard")
      .then((res) => {
        console.log("dashboard: " + res.data);
        if (res.data === "Success") {
          setSuc("Welcome Admin");
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));

    // Fetch student data
    axios
      .get("http://localhost:3005/get")
      .then((result) => setStudents(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    // Handle edit functionality
  };

  const handleDelete = (id) => {
    // Handle delete functionality
    axios
      .delete("http://localhost:3005/delete/" + id)
      .then((result) => {
        setStudents(students.filter((student) => student._id !== id));
        toast.success("Student deleted successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnCslick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="dashboard-container">
      <button className="logout" onClick={() => navigate("/")}>
        <span>Logout</span>
      </button>

      <h2 className="dashboard-heading">Dashboard</h2>
      <p>{suc}</p>
      <div className="student-list">
        <h2 className="dashboard-heading">Student Data</h2>
        {students.map((student) => (
          <div key={student._id} className="student-card">
            <div className="student-info">
              <p className="student-name">
                <span className="name_span">Name:</span> {student.username}
              </p>
              <p className="student-email">
                <span className="name_span">Email:</span> {student.email}
              </p>
            </div>
            <div className="action-buttons">
              <button
                className="edit-button"
                onClick={() => handleEdit(student._id)}
              >
                <RiEdit2Line /> Edit
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(student._id)}
              >
                <RiDeleteBin2Line /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
