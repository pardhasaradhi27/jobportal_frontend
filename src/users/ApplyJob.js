import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import bgImage from "../images/applyjob.jpg";

// Navbar component
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light mb-4"
      style={{
        backgroundColor: "#dceefe",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Job Portal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link" // Using button with link style
                onClick={() => navigate(-1)} // Navigate back
              >
                Back
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default function ApplyJob() {
  const { id } = useParams(); // Get the job id from the URL parameters
  const navigate = useNavigate(); // Initialize useNavigate to redirect after form submission

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    age: "",
    job_id: id, // Initialize jobId with the value from URL parameters
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const applicationData = {
        mobile: formData.mobile,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: formData.age, // Include company in jobData
        job: { id: formData.job_id }, // Associate the recruiter by id
      };
      console.log("Submitting application:", applicationData);

      // Submit the form data to the backend
      await axios.post("http://localhost:8080/application", applicationData);
      alert("Application submitted successfully!");

      // Redirect back to the User page after submission
      navigate("/user");
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application.");
    }
  };

  return (
    <div
      className="applyjob"
      style={{
        backgroundImage: `url(${bgImage})`, // Use the imported background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar /> {/* Add the Navbar here */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Apply for Job</h2>
        <div
          className="card border-0 mx-auto"
          style={{
            width: "650px",
            height: "700px",
            borderRadius: "20px",
            backgroundColor: "#dceefe",
          }}
        >
          <div className="card-body d-flex flex-column align-items-center">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="jobId" value={formData.job_id} />{" "}
              {/* Hidden input for job_id */}
              <div className="form-group mb-3 mt-3">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  style={{
                    borderWidth: "1px",
                    borderColor: "black",
                    backgroundColor: "#dceefe",
                  }}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  style={{
                    borderWidth: "1px",
                    borderColor: "black",
                    backgroundColor: "#dceefe",
                  }}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    borderWidth: "1px",
                    borderColor: "black",
                    backgroundColor: "#dceefe",
                  }}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  style={{
                    borderWidth: "1px",
                    borderColor: "black",
                    backgroundColor: "#dceefe",
                  }}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  style={{
                    borderWidth: "1px",
                    borderColor: "black",
                    backgroundColor: "#dceefe",
                    width: "550px",
                  }}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="resume">Resume</label>
                <input
                  type="file"
                  className="form-control"
                  id="resume"
                  name="resume"
                  // onChange={handleResumeChange} // Handle resume input
                  // removed required attribute to allow submission without a file
                  style={{
                    borderWidth: "1px",
                    borderColor: "black",
                    backgroundColor: "#dceefe",
                  }}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
