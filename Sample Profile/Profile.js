import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="container">
      <div className="profile-image">
        <img 
          src="https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg"
          alt="Profile" 
        />
      </div>
      <h1>Abhinav Reddy</h1>
      <p>React Web Developer | Frontend Enthusiast</p>
      <div className="skills">
        <div className="skill">React</div>
        <div className="skill">JavaScript</div>
        <div className="skill">HTML</div>
        <div className="skill">CSS</div>
      </div>
      <div className="contact">
        <p>
          Connect with me: <a href="mailto:abcd@gmail.com">abcd@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Profile;
