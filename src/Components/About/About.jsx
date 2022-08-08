import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PortPic from '../../media/portfolio .jpeg'
import { Image } from 'react-bootstrap';

function About() {
  return (
    <>
    <Image src={PortPic}/>
    <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>FullStack Developer</Card.Title>
        <Card.Text>
          My name is Daniel Bicheler and I am a full stack web developer. I recieved my training
          through General Assembly's Software Engineering Immersive Bootcamp (400hrs) and FreeCodeCamp's front end web developement course(300hrs).
        </Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
      <Card.Body>
        <Card.Link href="/projects">Projects</Card.Link>
        <Card.Link href="/resume">Resume</Card.Link>
      </Card.Body>
    </Card>
    </>
  );
}

export default About;