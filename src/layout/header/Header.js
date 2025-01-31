import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* Banner with black background and white text */}
            <div className="bg-dark text-white text-center py-2">
                11-11 SALE IS LIVE NOW /---
            </div>

            {/* Banner with white background and black text */}
            <div className="bg-white text-dark text-center py-2 border-bottom">
                For any queries, Contact us on whatsapp +92 331 7726261
            </div>

            {/* Header with navigation */}
            <Navbar bg="light" expand="lg" className="px-3" style={{ padding: '3rem 1rem' }}>
                <Container fluid className="px-0 px-lg-3" style={{ maxWidth: '1200px' }}>
                    <Navbar.Brand to="/">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={()=>navigate("/")}>Home</Nav.Link>
                            <Nav.Link onClick={()=>navigate("/collections")}>Catalog</Nav.Link>
                            <Nav.Link onClick={()=>navigate("/contact")}>Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link to="#search">🔍</Nav.Link>
                            <Nav.Link to="#user">👤</Nav.Link>
                            <Nav.Link to="#cart">🛒</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header