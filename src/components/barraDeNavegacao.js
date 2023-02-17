import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BarraDeNavegacao() {
    const formatacaoIcones={
        paddingRight: '10px',
        maxWidth: '30px',
    }
    const linkMenu={
        borderBottom: '2px solid',
        borderRadius: '5px',
    }
    const linkProduto={
        borderBottom: '2px solid',
        borderRadius: '5px',
        borderColor: '#a3a3a3'
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>

                <Navbar.Brand href="/"><Image src='/images/logo/logo_01.png' height="30px" style={{ paddingRight: "10px" }} />Art Acril</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={linkMenu} href="/">Home</Nav.Link>
                        <Nav.Link style={linkMenu} href="https://shopee.com.br/artacril" target='_blank'><img style={formatacaoIcones} src='https://img.icons8.com/color/480/shopee.png'/>Loja na Shopee</Nav.Link>
                        <Nav.Link style={linkMenu} href="https://drive.google.com/file/d/1AeQ3uyqqTskXBLwkAiUjro56C3RCeN1u/view?usp=sharing" target='_blank'>Catálogo 2023</Nav.Link>
                        <NavDropdown style={linkProduto} title="Produtos" >
                            <NavDropdown.Item  href="#action/3.1">Bustos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Sessão Indisponível
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link style={linkMenu} href="/sobre-nos">Sobre Nós</Nav.Link>
                        <Nav.Link style={linkMenu} eventKey={2} href="http://wa.me/5521980304952/" target='_blank'>
                        <img style={formatacaoIcones} src='https://imagepng.org/wp-content/uploads/2017/08/whatsapp-icone-4.png'/>Faça um Orçamento 
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BarraDeNavegacao;