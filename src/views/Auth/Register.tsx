import { Form, Button, Container, Row, Col } from "react-bootstrap"
import "./styles.css";
import { useState } from "react";

const Register = ()=>{
    const [formObject, setFormObject] = useState({
        email: "",
        password: "",
        userName:"",
        role: "User",
      });

      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            let response = await fetch(
              `${process.env.REACT_APP_BACK_END}/users/register/`,
              {
                method: "POST",
                body: JSON.stringify(formObject),
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );
            if(response.ok){
                response = await response.json();
                console.log(response);
            }
          } catch (error) {
            console.log(error);
          }
      };
    return(
        <Container fluid>
            <Row className="d-flex justify-content-center auth-container">
                <Col lg={3} >
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="First Name" 
                                value={formObject.userName}
                                onChange={(e) => {
                                  setFormObject({
                                    ...formObject,
                                    userName: e.target.value,
                                  });
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="example@gmail.com" 
                                value={formObject.email}
                                onChange={(e) => {
                                  setFormObject({
                                    ...formObject,
                                    email: e.target.value,
                                  });
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                                value={formObject.password}
                                onChange={(e) => {
                                  setFormObject({
                                    ...formObject,
                                    password: e.target.value,
                                  });
                                }}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Register