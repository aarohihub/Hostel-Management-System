import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { isAuthenticated, user } = useContext(Context);

  const [maintenance, setMaintenance] = useState([]);

  useEffect(() => {
    const fetchMaintenance = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/maintenance/getall",
          { withCredentials: true }
        );
        setMaintenance(data.maintenance);
      } catch (error) {
        setMaintenance([]);
        console.log("SOME ERROR OCCURED WHILE FETCHING MAINTENANCE", error);
      }
    };
    fetchMaintenance();
  }, []);
  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/staffs",
          { withCredentials: true }
        );
        setMaintenance(data.staff);
      } catch (error) {
        setMaintenance([]);
        console.log("SOME ERROR OCCURED WHILE FETCHING STAFFS", error);
      }
    };
    fetchStaffs();
  }, []);

  const handleUpdateStatus = async (maintenanceId, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/v1/maintenance/update/${maintenanceId}`,
        { status },
        { withCredentials: true }
      );
      setMaintenance((prevMaintenance) =>
        prevMaintenance.map((maintenance) =>
          maintenance._id === maintenanceId
            ? { ...maintenance, status }
            : maintenance
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <section className="dashboard page">
        <div className="banner">
          <div className="firstBox">
            <img src="/rik.png" alt="adminImg" />
            <div className="content">
              <div>
                <p>Hello, </p>
                <h5>{user && `${user.fullName}`}</h5>
              </div>
              <p>
                This is admin dashboard you can add, update, and delete rooms,
                staffs and admins.
              </p>
            </div>
          </div>
          <div className="secondBox">
            <p>Total Staffs</p>
            <h3>3</h3>
          </div>
          <div className="thirdBox">
            <p>Total Students</p>
            <h3>5</h3>
          </div>
        </div>
        <div className="banner">
          <h5>Complaints</h5>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Date</th>
                <th>Complain</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {maintenance && maintenance.length > 0 ? (
                maintenance.map((maintenance) => {
                  return (
                    <tr key={maintenance._id}>
                      <td>{`${maintenance.fullName}`}</td>
                      <td>{maintenance.date.substring(0, 10)}</td>
                      <td>{maintenance.issue}</td>

                      <td>{maintenance.department}</td>
                      <td>
                        <select
                          className={
                            maintenance.status === "Pending"
                              ? "value-pending"
                              : maintenance.status === "Completed"
                              ? "value-accepted"
                              : ""
                          }
                          value={maintenance.status}
                          onChange={(e) =>
                            handleUpdateStatus(maintenance._id, e.target.value)
                          }
                        >
                          <option value="Pending" className="value-pending">
                            Pending
                          </option>
                          <option value="Completed" className="value-accepted">
                            Completed
                          </option>
                        </select>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <h1>NO COMPLAINTS</h1>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
