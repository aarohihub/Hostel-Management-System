import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { toast } from "react-toastify";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Rooms = () => {
  const [rooms, setRoom] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/room/getall",
          { withCredentials: true }
        );
        setRoom(data.rooms);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchRoom();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/room/delete/${id}`, {
        withCredentials: true,
      });
      // Remove the deleted room member from the state
      setRoom(rooms.filter((member) => member._id !== id));
      toast.success("room deleted successfully");
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
        <h1>ROOMS</h1>
        <div className="banner">
          {rooms && rooms.length > 0 ? (
            rooms.map((element) => {
              return (
                <div className="card" key={element._id}>
                  <img
                    src={element.roomImage && element.roomImage.url}
                    alt="Room Avatar"
                  />
                  <h4>{`${element.roomName}`}</h4>
                  <div className="details">
                    <p>
                      roomId: <span>{element.roomId}</span>
                    </p>
                    <p>
                      roomPrice: <span>{element.roomPrice}</span>
                    </p>
                    <p>
                      roomDescription: <span>{element.roomDescription}</span>
                    </p>
                    <p>
                      roomStatus: <span>{element.roomStatus}</span>
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
            <h1>No Rooms Found</h1>
          )}
        </div>
      </section>
    </>
  );
};

export default Rooms;
