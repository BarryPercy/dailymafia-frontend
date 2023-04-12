import { Container, Navbar, Image, Row } from "react-bootstrap"
import "./styles.css";

const TopBar = () =>{
    return(
            <Container>
                <Row>
                    <Navbar.Brand href="/" className="text-white d-flex align-items-center justify-content-center">
                        <h1>DailyMafia</h1>
                    </Navbar.Brand>
                </Row>
            </Container>
    )

}

export default TopBar
