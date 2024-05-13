import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Signup = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [collegeName, setCollegeName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [nic, setNic] = useState();
  const [dob, setDob] = useState();
  const [gender, setGender] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      fullName,
      email,
      password,
      collegeName,
      phone,
      address,

      dob,

      role: "Student",
    };

    console.log("Submitting form with data:", userData);

    axios
      .post("http://localhost:4000/api/v1/user/student/register", userData)
      .then((res) => {
        toast.success(res.data.message);
        console.log("Response:", res.data);
        console.log("Navigating to login page...");
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              value={fullName}
              className="form-control rounded-0"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              value={email}
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="collegename">
              <strong>College Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter College Name"
              name="text"
              value={collegeName}
              className="form-control rounded-0"
              autoComplete="off"
              onChange={(e) => setCollegeName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone">
              <strong>Phone</strong>
            </label>
            <input
              type="number"
              placeholder="Enter Phone"
              name="text"
              value={phone}
              className="form-control rounded-0"
              autoComplete="off"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address">
              <strong>Address</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Address"
              name="text"
              value={address}
              className="form-control rounded-0"
              autoComplete="off"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address">
              <strong>Date of Birth</strong>
            </label>
            <input
              type="date"
              placeholder="Enter DOB"
              name="text"
              value={dob}
              className="form-control rounded-0"
              autoComplete="off"
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        <p>Already Have an Account</p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
