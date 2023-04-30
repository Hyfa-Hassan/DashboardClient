import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./ContactInfo.css"
// import FormContext from "./FormContext";
const ContactInfo = () => {
  const [data, setData] = useState(null);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3004/contact");
      const data = await response.json();
      setContacts(data);
      // console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h1>Welcome Admin</h1>
      {contacts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data to display.</p>
      )}
      <Footer />
    </div>
  );
};

export default ContactInfo;
