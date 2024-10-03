import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaBriefcase, FaMoneyBillWave, FaMapMarkerAlt } from "react-icons/fa"; // Icons for better visual appeal
import bgImage from "../images/viewjob.jpg"; // Import the background image

export default function ViewJob() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/job/${id}`);
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleApply = () => {
    navigate(`/user/applyjob/${id}`);
  };

  if (!job) {
    return (
      <div className="text-center my-5">
        <h2>Loading job details...</h2>
      </div>
    ); // Display loading until job data is fetched
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`, // Use the imported background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* Navigation Bar */}
      <nav
        className="navbar navbar-expand-lg navbar-light mb-4"
        style={{
          backgroundColor: "#7a9da3",
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

      {/* Main Content */}
      <div className="container my-5">
        <h2 className="text-center mb-4 text-dark">Apply for {job.name}</h2>
        <div
          className="card border-0 w-50 mx-auto static-card"
          style={{
            minHeight: "400px",
            borderRadius: "20px",
            backgroundColor: "#7a9da3",
          }}
        >
          <div className="card-body text-center mt-5">
            <h5 className="card-title">{job.name}</h5>
            <p className="card-text">
              <FaBriefcase className="me-2" />
              <strong>Recruiter:</strong> {job.company}
            </p>
            <p className="card-text">
              <FaMoneyBillWave className="me-2" />
              <strong>Salary:</strong> ${job.salary}
            </p>
            <p className="card-text">
              <FaMapMarkerAlt className="me-2" />
              <strong>Location:</strong> {job.location}
            </p>
            <p className="card-text">
              <strong>Description:</strong> {job.description}
            </p>
            <button className="btn btn-success mt-3" onClick={handleApply}>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
