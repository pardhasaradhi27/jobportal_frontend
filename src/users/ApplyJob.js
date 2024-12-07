import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import "./applyjob.css"; // Import your applyjob.css file
import tips from "../images/tips.png";

export default function ApplyJob() {
  const { id } = useParams(); // Get the job id from the URL parameters
  const navigate = useNavigate(); // Initialize useNavigate to redirect after form submission
  console.log(id);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    age: "",
    job_id: id, // Initialize jobId with the value from URL parameters
  });
  console.log(formData.job_id);

  useEffect(() => {
    // Check if the user is logged in
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/loginuser"); // Redirect to login if not logged in
    }

    // Initialize AOS
    AOS.init({
      duration: 1000, // Set duration for animations
      easing: "ease-in-out", // Easing function
    });
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { firstName, lastName, email, mobile, age, job_id } = formData;

      const applicationData = {
        firstName,
        lastName,
        email,
        mobile,
        age,
        job: {
          id: job_id, // Pass job_id as part of the job object
        },
      };

      // Submit the form data to the backend
      await axios.post("http://localhost:8080/application", applicationData, {
        headers: {
          "Content-Type": "application/json", // Ensure the request is treated as JSON
        },
      });

      alert("Application submitted successfully!");
      navigate("/user"); // Redirect back to the User page after submission
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application.");
    }
  };

  return (
    <div
      className="applyjob"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundColor: "#e7e7e5",
        position: "relative", // To allow positioning of the floating card
      }}
    >
      <Navbar />
      <div className="container my-5 d-flex justify-content-between">
        <div
          className="floating-card"
          data-aos="fade-up"
          style={{
            position: "absolute",
            left: "80px",
            top: "20%",
            width: "200px",
            height: "300px",
            backgroundColor: "transparent", // Set background to transparent
            color: "#fff", // Keep text color for visibility
            borderRadius: "10px",
            // boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // You can keep the shadow for a floating effect
            animation: "float 2s infinite ease-in-out",
          }}
        >
          <div
            className="card-body"
            style={{
              padding: "20px",
              // textAlign: "center",
            }}
          >
            {/* Add Image */}
            <img
              src={tips} // Replace with the correct image path
              alt="Job Application"
              style={{
                width: "100px", // Adjust image width as needed
                height: "auto", // Maintain aspect ratio
                borderRadius: "8px", // Optional: If you want rounded corners
                marginBottom: "15px", // Add margin below the image
              }}
            />
            {/* <h4>Job Application</h4> */}
            <p className="text-black">
              Apply for the job and secure your future. Good skills can lead to
              higher chances of getting a Job.
            </p>
          </div>
        </div>

        <div
          className="card border-0 mx-auto text-black"
          style={{
            width: "650px",
            height: "700px",
            borderRadius: "20px",
          }}
          data-aos="fade-up"
        >
          <div className="card-body d-flex flex-column align-items-center">
            <h2>Apply for job</h2>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="jobId" value={formData.job_id} />
              <div className="form-group mb-3 mt-3" data-aos="fade-up">
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
                    borderRadius: "10px",
                    borderWidth: "1px",
                    borderColor: "#fff",
                    backgroundColor: "#e7e7e5",
                    color: "black",
                  }}
                />
              </div>
              <div className="form-group mb-3" data-aos="fade-up">
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
                    borderRadius: "10px",
                    borderWidth: "1px",
                    borderColor: "#fff",
                    backgroundColor: "#e7e7e5",
                    color: "black",
                  }}
                />
              </div>
              <div className="form-group mb-3" data-aos="fade-up">
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
                    borderRadius: "10px",
                    borderWidth: "1px",
                    borderColor: "#fff",
                    backgroundColor: "#e7e7e5",
                    color: "black",
                  }}
                />
              </div>
              <div className="form-group mb-3" data-aos="fade-up">
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
                    borderRadius: "10px",
                    borderWidth: "1px",
                    borderColor: "#fff",
                    backgroundColor: "#e7e7e5",
                    color: "black",
                  }}
                />
              </div>
              <div className="form-group mb-3" data-aos="fade-up">
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
                    borderRadius: "10px",
                    borderWidth: "1px",
                    borderColor: "#fff",
                    backgroundColor: "#e7e7e5",
                    width: "550px",
                    color: "black",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{ borderRadius: "10px" }}
                className="btn btn-success"
                data-aos="fade-up"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
