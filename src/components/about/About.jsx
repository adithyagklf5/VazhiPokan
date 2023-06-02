import React from "react";
import { Link } from 'react-router-dom';
import "./About.css";
const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="left">
            <h2 className="heading">
              Wanderlust Chronicles
            </h2>
            <p>
              Welcome to Wanderlust Chronicles, a travel blog dedicated to sharing the beauty and excitement of exploring our incredible planet. Here, we believe that travel is more than just visiting new places; it's about immersing ourselves in diverse cultures, indulging in unique culinary experiences, and forming lasting connections with people from all walks of life. Our mission is to inspire you to embark on your own adventures, whether it's a weekend getaway or a year-long journey around the world.
            </p>
            <p>
              Join us as we traverse the globe, uncovering hidden gems and popular destinations alike. From the bustling streets of Tokyo to the serene landscapes of Patagonia, our stories and photographs will transport you to the heart of each destination. Along the way, we'll share practical tips, insightful guides, and personal anecdotes to help you make the most of your travels. So, pack your bags, grab your passport, and let Wanderlust Chronicles be your guide to a world of unforgettable experiences.
            </p>
            



          <button className="btn2">
            <Link to="/home">Go To Home</Link>
          </button>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;