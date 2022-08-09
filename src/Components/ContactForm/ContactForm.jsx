import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {send} from 'emailjs-com'
import {useState} from 'react'

function ContactForm() {
    
        const [toSend, setToSend] = useState({
            name: '',
            email: '',
          message: '',
          
        });
      
        const onSubmit = (e) => {
            e.preventDefault();
            send(
              'PortfolioDbic',
              'template_ftfo373',
              toSend,
              'GKpyCtBwRcmd-3W7n'
            )
              .then((response) => {
                console.log('SUCCESS!', response.status, response.text, 'MESSAGE', toSend);
              })
              .catch((err) => {
                console.log('FAILED...', err);
              });
          };
      
        const handleChange = (e) => {
          setToSend({ ...toSend, [e.target.name]: e.target.value });
        };
  
    return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" name='name' value={toSend.name} placeholder="Name" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={toSend.email} placeholder="Enter email" onChange={handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" name='message' value={toSend.message} placeholder="Message" onChange={handleChange}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;