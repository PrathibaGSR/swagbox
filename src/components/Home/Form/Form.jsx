import React, { useState } from "react";
import inrStyle from "./inr.module.scss"
import emailjs from "@emailjs/browser";



export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: '',
    agreement: false,
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  // Validation functions for each field
  const validateField = (name, value) => {
    let error = '';
    // const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        break;
      case 'phone':
        if (!value.trim()) error = 'Phone is required';
        // else if (!phoneRegex.test(value)) error = 'Enter a valid 10-digit phone number';
        break;
      case 'email':
        if (!value.trim()) error = 'Email is required';
        else if (!emailRegex.test(value)) error = 'Enter a valid email address';
        break;
      case 'location':
        if (!value.trim()) error = 'City/location is required';
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const val = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    const error = validateField(name, val);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tempErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) tempErrors[key] = error;
    });

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      setIsSending(true);

      try {
        const response = await emailjs.send(
          "service_qtz91de", // Replace with your EmailJS Service ID
          "template_x2mcmro", // Replace with your Template ID
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            location: formData.location,
            message: formData.message
          },
          "iBvVWce9JqNbuFEwy" // Replace with your EmailJS Public Key
        );

        console.log("SUCCESS!", response.status, response.text);
        alert("Form submitted successfully!");

        setFormData({
          name: '',
          phone: '',
          email: '',
          location:'',
          message: '',
          agreement: false,
        });
        setErrors({});
      } catch (error) {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again.");
      }

      setIsSending(false);
    }
  };

  return (
    <>
      <section className={inrStyle.frmSec}>
        <div className="container">
          <form onSubmit={handleSubmit} noValidate>
            <div className="row">
              <div className="col-lg-4">
                <div className="position-relative">
                  <input placeholder="Full Name *" type="text" name="name" value={formData.name} onChange={handleChange} />
                  {errors.name && <p className={inrStyle.errMsg}>{errors.name}</p>}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="position-relative">
                  <input placeholder="Mobile Number *" type="text" name="phone" value={formData.phone} onChange={handleChange} />
                  {errors.phone && <p className={inrStyle.errMsg}>{errors.phone}</p>}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="position-relative">
                  <input placeholder="Email Address *" type="email" name="email" value={formData.email} onChange={handleChange} />
                  {errors.email && <p className={inrStyle.errMsg}>{errors.email}</p>}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <input placeholder="City / Location *" type="text" name="location" value={formData.location} onChange={handleChange} />
                  {errors.location && <p className={inrStyle.errMsg}>{errors.location}</p>}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative">
                  <textarea placeholder="Message or Requirement *" name="message" value={formData.message} onChange={handleChange}></textarea>
                  {errors.message && <p className={inrStyle.errMsg}>{errors.message}</p>}
                </div>
              </div>
            </div>
            <button type="submit">Submit Query</button>
          </form>
        </div>
      </section>
    </>
  )
}
