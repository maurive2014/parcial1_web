import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import backgroundImage from './assets/background.jpg';
import { useNavigate } from 'react-router-dom';

function Login(){

    const [formValues, setFormValues] = useState({email:"", password:""})
    const [validationStates, setValidationStates] = useState({emailState:false, passwordState:false})
    const navigate = useNavigate();
    useEffect(()=>{

        if (formValues.password.length > 8){
          setValidationStates(prevState => ({ ...prevState, passwordState: true }));
        } else  {  
            setValidationStates(prevState => ({ ...prevState, passwordState: false }));
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formValues.email.match(emailPattern)) {
            setValidationStates(prevState => ({ ...prevState, emailState: true }));
        } else  {
            setValidationStates(prevState => ({ ...prevState, emailState: false }));
        }

    }, [formValues]);
    

    const clickSubmit = (() => {
        if (validationStates.emailState === true && validationStates.passwordState === true ){
          navigate("/home");
        } else {
          alert('Please enter valid email and password.');
        }
      })


    const handleEmailChange = ((e) => {
        setFormValues({...formValues, email: e.target.value})
      });
     
      const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value})
        
      });


    return ( 
      <div style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        minHeight: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Container style={{ 
            backgroundColor: 'white', 
            padding: '2rem',  
        }}>
        <Row xs={1}>
          <Col>
          <div>
            <h1>Log in</h1>
            
            <Form>
            <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email}/>
            { !validationStates.emailState && <Form.Text className="text-muted">Incorrect format.</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />
            { !validationStates.passwordState && (<Form.Text className="text-muted">Password is not than 8 characters.</Form.Text>)}
            </Form.Group>
            <Button variant="primary" onClick={clickSubmit}>
            Log in
            </Button>
        </Form>
        </div>
          </Col>
        </Row>
      </Container>
    
    </div>
    );
}


export default Login;