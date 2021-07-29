import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/Header.css';

export default function Contact() {
  return (
    <div className="ContactInfo">
      <h1>Contact Mark</h1>
      <p>To contact me you can fill out the form bellow your email me @ marklaham@gmail.com</p>
      <Form className="contactFrom">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Text</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlSubmit1">
      <Button as="input" type="submit" value="Submit" />{' '}
      
      </Form.Group>
    </Form>
  </div> 

  );
}