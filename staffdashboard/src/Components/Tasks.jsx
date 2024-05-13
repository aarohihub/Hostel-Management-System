import React, { useState, useEffect } from "react";
import { useContext } from "react";

import "./Tasks.css";
import { Context } from "../main";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const Tasks = () => {
  const { isAuthenticated, user } = useContext(Context);

  const [maintenance, setMaintenance] = useState([]);
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/staff/me",
          { withCredentials: true }
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);
  useEffect(() => {
    const fetchMaintenance = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/v1/maintenance/getbydepartment/${user.staffDepartment}`,
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
    <div className="content">
      <h2>Tasks</h2>
      <p>View and manage your tasks here.</p>
      <table className="tasks-table">
        <thead>
          <tr>
            <th>Name:</th>
            <th>Date</th>
            <th>Issue</th>
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
  );
};

export default Tasks;
