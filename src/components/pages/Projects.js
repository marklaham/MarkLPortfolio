import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Header.css';

import cardPic from "../Images/softwareStock.jpg" ;

const projectArray = [

  {
    "name": "Sports Field Booking",
    "description": "minivaThis tool allows sports teams in Ottawa to book a field to assure that there is a field and that no field is double booked. n",
    "deployUrl": "https://dashboard.heroku.com/apps/lit-spire-78703",
  },
  {
    "name": "Skewed Newz",
    "description": "an application that would draw from different news API'S and display those articles to the screen.",
    "deployUrl": "https://weird-but-doable.github.io/SkewedNews/",
  },
  {
    "name": "Note Taker",
    "description": "Note Taker that can be used to write , save and keep track of notes.",
    "deployUrl": "https://secret-brook-34161.herokuapp.com/",
  },
  {
    "name": "Weather Dashboard",
    "description": "This is a weather search app that allows you to search the current and 5 day forcast by city name.",
    "deployUrl": "https://marklaham.github.io/weatherdash/",
  },
  {
    "name": "Daily Scheduler",
    "description": "a simple calendar application that allows a user to save events for each hour of the day by modifying starter code.",
    "deployUrl":"https://marklaham.github.io/dailyscheduler/",
  },
  {
    "name": "Tech Blog",
    "description": "minivan",
    "deployUrl": "https://blooming-ridge-54365.herokuapp.com/",
  },
 


];

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <p>
       Here are just a handful of my projects to give you a taste of my experience.
      
      </p>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={cardPic} />
              <Card.Body>
                <Card.Title>{projectArray[idx].name}</Card.Title>
                <Card.Text>
                {projectArray[idx].description}
                </Card.Text>
                <Card.Link href={projectArray[idx].deployUrl}>Deployed Application</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
}
