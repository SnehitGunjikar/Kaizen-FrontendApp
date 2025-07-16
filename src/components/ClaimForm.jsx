import { useState } from "react";
import "../CustomLayout.css";

function ClaimForm() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        dob: "",
        jobTitle: "",
        diagnosisType: "",
        diagnosisDate: "",
        story: "",
        agree: false,
        notRobot: false,
    });

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.agree || !form.notRobot) {
            alert("❗ Please agree to the terms and confirm you're a person.");
            return;
        }
        alert("✅ Form submitted!");
        console.log("Submitted data:", form);
    };

    return (
        <form className="custom-form" onSubmit={handleSubmit}>
            <div className="custom-form-title">Claim Form</div>
            <div className="custom-form-row">
                <input name="firstName" placeholder="First Name *" onChange={handleChange} className="custom-input" required />
                <input name="lastName" placeholder="Last Name *" onChange={handleChange} className="custom-input" required />
            </div>
            <div className="custom-form-row">
                <input name="phone" placeholder="Phone Number *" onChange={handleChange} className="custom-input" required />
                <input name="email" placeholder="Email ID *" onChange={handleChange} className="custom-input" required />
            </div>
            <div className="custom-form-row">
                <div className="custom-input-icon-wrap">
                    <input name="dob" placeholder="Date of birth *" onChange={handleChange} className="custom-input" required type="date" />
                    <span className="custom-input-icon">📅</span>
                </div>
                <input name="jobTitle" placeholder="Job Title *" onChange={handleChange} className="custom-input" required />
            </div>
            <div className="custom-form-row">
                <div className="custom-input-icon-wrap">
                    <input name="diagnosisDate" placeholder="Date of Diagnosis*" onChange={handleChange} className="custom-input" required type="date" />
                    <span className="custom-input-icon">📅</span>
                </div>
                <div className="custom-input-icon-wrap">
                    <select name="diagnosisType" onChange={handleChange} className="custom-input" required defaultValue="">
                        <option value="" disabled>Type of Diagnosis*</option>
                        <option value="Pleural">Pleural</option>
                        <option value="Peritoneal">Peritoneal</option>
                        <option value="Pericardial">Pericardial</option>
                        <option value="Other">Other</option>
                    </select>
                    <span className="custom-input-icon">▼</span>
                </div>
            </div>
            <textarea name="story" placeholder="Tell us your story (optional)" onChange={handleChange} className="custom-textarea" />
            <label className="custom-checkbox-label">
                <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} className="custom-checkbox" />
                <span>
                    I agree to the <a href="#" className="custom-link">privacy policy</a> and <a href="#" className="custom-link">disclaimer</a> and give my express written consent to be contacted regarding my case options. I understand that I may be contacted using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
                </span>
            </label>
            <label className="custom-checkbox-label">
                <input type="checkbox" name="notRobot" checked={form.notRobot} onChange={handleChange} className="custom-checkbox" />
                Please check this box to verify you're a person.
            </label>
            <button type="submit" className="custom-form-btn">Start your claim now</button>
        </form>
    );
}

export default ClaimForm;
