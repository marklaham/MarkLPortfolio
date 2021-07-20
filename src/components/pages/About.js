import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


export default function About() {
  return (
    <div>
      <h1>About Mark</h1>
      <Container>
  <Row>
  
    <Col xs={6} md={4}>
      <Image src="./Images/MArkBioPhoto.jpg" roundedCircle />
    </Col>
  </Row>
</Container>
      <p>
      Front-end web developer leveraging a background in stress/change management to provide unique perspectives on how end-users interact with websites and software platforms. Earned a certificate in Full Stack Web Development from the Carleton University Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.
      </p>
    </div>
  );
}
