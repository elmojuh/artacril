import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BarraDeNavegacao() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>

                <Navbar.Brand href="/home"><Image src='/images/logo/logo_01.png' height="30px" style={{ paddingRight: "10px" }} />Art Acril</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="https://shopee.com.br/artacril" target='_blank'>Loja na Shopee</Nav.Link>
                        <Nav.Link href="https://drive.google.com/file/d/1AeQ3uyqqTskXBLwkAiUjro56C3RCeN1u/view?usp=sharing" target='_blank'>Catálogo 2023</Nav.Link>
                        <NavDropdown title="Produtos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Busto</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Base
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Kits<Image src='/images/produtos/Expositor_Busto_MAN_Preto_de_Lado.jpeg' width={"30px"} /></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Outros
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/sobre-nos">Sobre Nós</Nav.Link>
                        <Nav.Link eventKey={2} href="#facaUmOrcamento">
                            Faça um Orçamento
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BarraDeNavegacao;