import React, { useEffect, useState } from "react";
import "../../styles/patientDashboard.css";

const PatientDashboard = () => {
  const [patient, setPatient] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    const data = localStorage.getItem("patientProfile");
    if (data) {
      setPatient(JSON.parse(data));
    }
  }, []);

  if (!patient) {
    return <h2 style={{ padding: "20px" }}>No Patient Profile Found</h2>;
  }

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <div className="brand">
          <div className="logo-icon">+</div>
          <div>
            <h3>MediCenter Pro</h3>
            <span>General Hospital</span>
          </div>
        </div>

        <ul className="menu">
          <li
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </li>

          <li
            className={activeTab === "appointments" ? "active" : ""}
            onClick={() => setActiveTab("appointments")}
          >
            Appointments
          </li>
        </ul>

        <div className="profile-section">
          <div className="profile-avatar">👤</div>
          <div>
            <h4>Patient</h4>
            <span>Logged In</span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="main">

        <div className="topbar">
          <h1>
            {activeTab === "dashboard"
              ? "Patient Medical History"
              : "Appointments"}
          </h1>
        </div>

        {activeTab === "dashboard" && (
          <div className="content-wrapper">

            <div className="profile-card">
              <div className="avatar-large">👤</div>
              <h3>Patient Profile</h3>

              <div className="info-grid">
                <div>
                  <span>WEIGHT</span>
                  <h4>{patient.weight} kg</h4>
                </div>

                <div>
                  <span>HEIGHT</span>
                  <h4>{patient.height} cm</h4>
                </div>

                <div>
                  <span>BLOOD TYPE</span>
                  <h4 className="blood">{patient.bloodType}</h4>
                </div>
              </div>

              <div className="allergy-box">
                <h4>⚠ Critical Allergies</h4>
                <p>{patient.allergies}</p>
              </div>
            </div>

            <div className="right-section">
              <div className="card">
                <h2>Active Medications</h2>
                <p>{patient.medications}</p>
              </div>
            </div>

          </div>
        )}

        {activeTab === "appointments" && (
          <div className="card" style={{ marginTop: "20px" }}>
            <h2>Upcoming Appointments</h2>
            <p>No appointments scheduled yet.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default PatientDashboard;