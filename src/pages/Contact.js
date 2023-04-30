import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Contact.css";
import FormContext from "./FormContext";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // localStorage.setItem('values', JSON.stringify(values))
    // console.log(values);

    const { name, email, message } = values;
    const res = await fetch("http://localhost:3004/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await res.json();
    // console.log(data)
    if (res.status === 404 || !data) {
      // window.alert("Please fill the details")
      console.log("Please fill the details");
    } else {
      window.alert("Contacted successfully")
    }
    setValues({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div>
      <Header />
      <FormContext.Provider value={values}>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Type your Name"
                value={values.name}
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Type your Email"
                value={values.email}
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label>Message</label>
              <input
                type="text"
                name="message"
                placeholder="Type your Message"
                value={values.message}
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label></label>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </FormContext.Provider>
      <Footer />
    </div>
  );
}

export default Contact;
