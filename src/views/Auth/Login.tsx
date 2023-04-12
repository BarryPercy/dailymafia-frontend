import { Form, Button, Container, Row, Col } from "react-bootstrap"
import "./styles.css";
import { useState } from "react";


const Login = ()=>{
    const [formObject, setFormObject] = useState({
        userName: "",
        password: "",
      });

      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            let response = await fetch(
              `${process.env.REACT_APP_BACK_END}/users/login/`,
              {
                method: "POST",
                body: JSON.stringify(formObject),
                headers: {
                  "Content-Type": "application/json",
                },
              },
            );
            if(response.ok){
                const token = await response.json();
                localStorage.setItem('accessToken', JSON.stringify(token.accessToken));
            }
          } catch (error) {
            console.log(error);
          }
      };
    return(
        <Container fluid className="d-flex flex-column flex-grow-1">
            <Row className="auth-container">
                <Col xs={6} sm={4} md={3}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" 
                                value={formObject.userName}
                                onChange={(e) => {
                                  setFormObject({
                                    ...formObject,
                                    userName: e.target.value,
                                  });
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="w-100" type="password" placeholder="Password" 
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

export default Login