import React from 'react';

import Image from 'react-bootstrap/Image';
import '../styles/Header.css';

import profilePic from "../Images/MArkBioPhoto.jpg" ;


export default function About() {
  return (
    <div>
      <h1>About Mark</h1>
    
      <Image className="photo" src={ profilePic} roundedCircle />
      <p>
      Front-end web developer leveraging a background in stress/change management to provide unique perspectives on how end-users interact with websites and software platforms. Earned a certificate in Full Stack Web Development from the Carleton University Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.
      </p>
    </div>
  );
}
