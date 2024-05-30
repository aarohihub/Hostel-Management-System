import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Staffs = () => {
  const [staff, setStaff] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/staffs",
          { withCredentials: true }
        );
        setStaff(data.students);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchStaff();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/user/delete/${id}`, {
        withCredentials: true,
      });
      // Remove the deleted staff member from the state
      setStaff(staff.filter((member) => member._id !== id));
      toast.success("Staff deleted successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <section className="page doctors">
        <h1>STAFFS</h1>
        <div className="banner">
          {staff && staff.length > 0 ? (
            staff.map((element) => {
              return (
                <div className="card" key={element._id}>
                  <img
                    src={element.staffAvatar && element.staffAvatar.url}
                    alt="Staff Avatar"
                  />
                  <h4>{`${element.fullName}`}</h4>
                  <div className="details">
                    <p>
                      Email: <span>{element.email}</span>
                    </p>
                    <p>
                      Phone: <span>{element.phone}</span>
                    </p>
                    <p>
                      DOB: <span>{element.dob.substring(0, 10)}</span>
                    </p>
                    <p>
                      Department: <span>{element.staffDepartment}</span>
                    </p>
                    <p>
                      NIC: <span>{element.nic}</span>
                    </p>
                    <p>
                      Address: <span>{element.address}</span>
                    </p>
                    <p>
                      Gender: <span>{element.gender}</span>
                    </p>
                    <MdDelete
                      style={{
                        color: "red",
                        fontSize: "50px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleDelete(element._id)}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <h1>No Staffs Found</h1>
          )}
        </div>
      </section>
    </>
  );
};

export default Staffs;
