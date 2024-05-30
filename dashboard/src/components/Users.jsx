import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Users = () => {
  const { isAuthenticated } = useContext(Context);
  const [users, setUser] = useState([]);

  //fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/getall",
          { withCredentials: true }
        );
        setUser(data.users);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/user/delete/${id}`, {
        withCredentials: true,
      });
      // Remove the deleted user from the state
      setUser(users.filter((member) => member._id !== id));
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <section className="page messages">
      <h1>ALL USERS</h1>
      <div className="banner">
        {users && users.length > 0 ? (
          users.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="details">
                  <p>
                    Full Name: <span>{element.fullName}</span>
                  </p>
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span> {element.phone}</span>
                  </p>
                  <p>
                    NIC: <span>{element.nic}</span>
                  </p>
                  <p>
                    Gender: <span>{element.gender}</span>
                  </p>
                  <p>
                    Address: <span>{element.address}</span>
                  </p>

                  <p>
                    Role: <span>{element.role}</span>
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
          <h1>NO USERS FOUND</h1>
        )}
      </div>
    </section>
  );
};

export default Users;
