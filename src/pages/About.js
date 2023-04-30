import React, { useState, useEffect } from "react";
import axios from "axios";
import "./About.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
const About = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  
  return (
    <div>
      <Header />
      <ul>
        {posts.map((post) => {
          return (
            <div className="display-data">
              <li key={post.id} style={{listStyleType:"none"}}>{post.name}</li>
              <li key={post.id} style={{listStyleType:"none"}}>{post.city}</li><hr />
            </div>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
};

export default About;
