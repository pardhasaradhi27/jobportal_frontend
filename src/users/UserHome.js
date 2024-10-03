import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jobImage from "../images/jobcard.jpg"; // Import the common image
import userhome from "../images/userhome.jpg";

export default function UserHome() {
  const [jobs, setJobs] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null); // State to track hovered card

  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/jobs");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = (jobId) => {
    navigate(`/user/job/${jobId}`);
  };

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/"); // Navigate to the login page after logout
  };

  return (
    <div
      style={{
        backgroundImage: `url(${userhome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* Navigation Bar */}
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: "#c1e2f3",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Job Portal
          </a>
          <div className="collapse navbar-collapse justify-content-end">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container my-5">
        <h2 className="text-center mb-4 text-primary">Available Jobs</h2>
        <div className="row">
          {jobs.map((job) => (
            <div
              className="col-md-4 mb-4"
              key={job.id}
              onMouseEnter={() => setHoveredCard(job.id)} // Set the hovered card
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className="card shadow-sm border-0 h-100"
                style={{
                  transition: "transform 0.3s, boxShadow 0.3s",
                  transform:
                    hoveredCard === job.id ? "scale(1.05)" : "scale(1)",
                  boxShadow:
                    hoveredCard === job.id
                      ? "0 4px 15px rgba(0, 0, 0, 0.2)"
                      : "none",
                }}
              >
                <img
                  className="card-img-top"
                  src={jobImage} // Use the common image for all cards
                  alt="Job"
                  style={{ height: "150px", objectFit: "cover" }} // Set a fixed height for images
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{job.name}</h5>
                  <p className="card-text flex-grow-1">
                    {job.description
                      ? `${job.description.substring(0, 60)}...`
                      : "No description available."}
                  </p>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => handleApply(job.id)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
