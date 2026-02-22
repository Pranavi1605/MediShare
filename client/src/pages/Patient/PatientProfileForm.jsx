import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PatientProfileForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    weight: "",
    height: "",
    bloodType: "",
    allergies: "",
    medications: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    localStorage.setItem("patientProfile", JSON.stringify(formData));

    // Redirect to dashboard
    navigate("/patient/dashboard");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Create Patient Profile</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="weight"
            placeholder="Enter Weight (kg)"
            value={formData.weight}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="height"
            placeholder="Enter Height (cm)"
            value={formData.height}
            onChange={handleChange}
            required
          />

          <select
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Type</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>

          <textarea
            name="allergies"
            placeholder="Enter Critical Allergies"
            value={formData.allergies}
            onChange={handleChange}
            required
          />

          <textarea
            name="medications"
            placeholder="Enter Active Medications"
            value={formData.medications}
            onChange={handleChange}
            required
          />

          <button type="submit">Save & Continue</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f4f6f9",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "350px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
};

export default PatientProfileForm;