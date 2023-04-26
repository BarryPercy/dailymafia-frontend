import { useState, useEffect } from "react";
import { Col, Container, Row, Button, Navbar } from "react-bootstrap";
import { User } from "../../redux/interfaces";
import axios from "axios";
import "./styles.css";

const TopBar = () =>{
    const discordLoginUrl = `${process.env.REACT_APP_BACKEND}/auth/discord/login`;
    const [user, setUser] = useState<User|null>(null)
    const [loggedIn, setLoggedIn] = useState(false);
    const checkLoginStatus = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_BACKEND}/users/me`, {
            withCredentials: true
          });
          setLoggedIn(true);
          setUser(response.data)
        } catch (error) {
          setLoggedIn(false);
        }
    };
    const handleLogout = async () => {
        try {
          await axios.post(`${process.env.REACT_APP_BACKEND}/users/logout`, null, {
            withCredentials: true
          });
          setLoggedIn(false);
          setUser(null)
        } catch (error) {
          console.log(error);
        }
      };
    useEffect(()=>{
        checkLoginStatus();
    },[])
    return(
            <Container>
                <Row>
                    <Col>
                        <Navbar.Brand href="/" className="text-white">
                            <h1>DailyMafia</h1>
                        </Navbar.Brand>
                    </Col>
                    <Col>
                        {loggedIn ? (
                            <Button onClick={handleLogout}>
                            Logout
                            </Button>
                        ):<Button href={discordLoginUrl} variant="primary">
                        Login with Discord
                      </Button>}
                    </Col>
                    <Col className="text-white">
                        {user?.userName}
                    </Col>
                    

                </Row>
            </Container>
    )

}

export default TopBar
