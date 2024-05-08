import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddNewRoom = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [roomId, setRoomId] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomPrice, setRoomPrice] = useState("");
  const [roomImage, setRoomImage] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [roomStatus, setRoomStatus] = useState("");
  const [roomImagePreview, setRoomImagePreview] = useState("");

  const navigateTo = useNavigate();

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setRoomImagePreview(reader.result);
      setRoomImage(file);
    };
  };

  const handleAddNewRoom = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("roomId", roomId);
      formData.append("roomName", roomName);
      formData.append("roomPrice", roomPrice);
      formData.append("roomImage", roomImage);
      formData.append("roomDescription", roomDescription);
      formData.append("roomStatus", roomStatus);

      await axios
        .post("http://localhost:4000/api/v1/room/addnew", formData, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          toast.success(res.data.message);

          navigateTo("/");
        });
    } catch (error) {
      toast.error(error.response.data.message);
      navigateTo("/");
    }
  };

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <section className="page">
        <div className="container form-component add-doctor-form">
          <img src="/logo.png" alt="logo" className="logo" />
          <h1 className="form-title">ADD NEW ROOM</h1>

          <form onSubmit={handleAddNewRoom}>
            <div className="first-wrapper">
              <div>
                <img
                  src={
                    roomImagePreview ? `${roomImagePreview}` : "/addroom.png"
                  }
                  alt="Room Image"
                  style={{ height: "180px", width: "180px" }}
                />

                <input type="file" onChange={handleImage} />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Room ID"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Room Name"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Room Price"
                  value={roomPrice}
                  onChange={(e) => setRoomPrice(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Room Description"
                  value={roomDescription}
                  onChange={(e) => setRoomDescription(e.target.value)}
                />

                <select
                  value={roomStatus}
                  onChange={(e) => setRoomStatus(e.target.value)}
                >
                  <option value="">Select Status</option>
                  <option value="Available">Available</option>
                  <option value="Full">Full</option>
                </select>

                <button type="submit">Add New Room</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddNewRoom;
