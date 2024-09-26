import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Login(){

    const [formValues, setFormValues] = useState({email:"", password:""})
    const [validationStates, setValidationStates] = useState({emailState:false, passwordState:false})

    useEffect(()=>{

        if (formValues.password.length > 8){
            setValidationStates({...validationStates, passwordState:true});
        } else  {
            setValidationStates({...validationStates, passwordState:false});
        }
        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formValues.email.match(emailPattern)) {
            setValidationStates({...validationStates, emailState:true});
        } else  {
            setValidationStates({...validationStates, emailState:false});
        }

    }, [formValues]);
    

    const clickSubmit = (() => {
        if (validationStates.emailState === true && validationStates.passwordState === true ){
            
        }
      })


    const handleEmailChange = ((e) => {
        setFormValues({...formValues, email: e.target.value})
      });
     
      const handlePasswordChange = ((e) => {
        setFormValues({...formValues, password: e.target.value})
        
      });


    return ( 
        <Container >
        <Row xs={1}>
          <Col>
          <div>
            <h1>Ejemplo de formularios!</h1>
            
            <Form>
            <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email}/>
            { !validationStates.emailState && <Form.Text className="text-muted">Incorrect format.</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />
            { !validationStates.passwordState && <Form.Text className="text-muted">Your password  should be at least 8 char long</Form.Text>}
            </Form.Group>
            <Button variant="primary" onClick={clickSubmit}>
            Submit
            </Button>
        </Form>
        </div>
          </Col>
        </Row>
      </Container>
    
    
    );
}


export default Login;