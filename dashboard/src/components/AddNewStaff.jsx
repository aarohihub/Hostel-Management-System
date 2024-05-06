import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddNewStaff = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [staffDepartment, setStaffDepartment] = useState("");
  const [staffAvatar, setStaffAvatar] = useState("");
  const [staffAvatarPreview, setStaffAvatarPreview] = useState("");

  const departmentsArray = [
    "Housekeeping",
    "Maintenance",
    "Food Service",
    "Security",
    "Laundry",
  ];

  const navigateTo = useNavigate();

  const handleAvatar = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setStaffAvatarPreview(reader.result);
      setStaffAvatar(file);
    };
  };

  const handleAddNewStaff = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("nic", nic);
      formData.append("address", address);
      formData.append("dob", dob);
      formData.append("gender", gender);
      formData.append("password", password);
      formData.append("staffDepartment", staffDepartment);
      formData.append("staffAvatar", staffAvatar);
      await axios
        .post("http://localhost:4000/api/v1/user/staff/addnew", formData, {
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
          <h1 className="form-title">REGISTER NEW STAFF</h1>

          <form onSubmit={handleAddNewStaff}>
            <div className="first-wrapper">
              <div>
                <img
                  src={
                    staffAvatarPreview ? `${staffAvatarPreview}` : "/stafff.png"
                  }
                  alt="Staff Avatar"
                  style={{ height: "180px", width: "180px" }}
                />

                <input type="file" onChange={handleAvatar} />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="NIC"
                  value={nic}
                  onChange={(e) => setNic(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="date"
                  placeholder="Date of Birth"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <select
                  value={staffDepartment}
                  onChange={(e) => setStaffDepartment(e.target.value)}
                >
                  <option value="">Select Department</option>
                  {departmentsArray.map((element, index) => {
                    return (
                      <option value={element} key={index}>
                        {element}
                      </option>
                    );
                  })}
                </select>
                <button type="submit">Resigter New Staff</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddNewStaff;
