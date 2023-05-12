import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavigationBar() {
    return (
        <div>
            <Navbar fixed="top" className="navTop">
                <Container>
                    <Navbar.Brand href="/" className="text-white">Movie List</Navbar.Brand>
                    <Nav>
                        <Nav.Link className="navLink" href="#trending">Trending</Nav.Link>
                        <Nav.Link className="navLink" href="#popular">Popular</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}