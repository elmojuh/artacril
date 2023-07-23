import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const linkStyles = {
  borderBottom: '2px solid',
  borderRadius: '5px',
};

const linkProductStyles = {
  ...linkStyles,
  borderColor: '#a3a3a3',
};

const iconStyles = {
  paddingRight: '10px',
  maxWidth: '30px',
};

function BarraDeNavegacao() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand href="/" style={{ marginRight: "120px" }}>
          <Image src="/images/logo/logo_01.png" height="30px" style={{ paddingRight: "10px" }} />Art Acril
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={linkStyles} href="https://drive.google.com/file/d/1AeQ3uyqqTskXBLwkAiUjro56C3RCeN1u/view?usp=sharing" target='_blank'>
              Catálogo 2023
            </Nav.Link>
            {/*}
            <NavDropdown style={linkProductStyles} title="Produtos">
              <NavDropdown.Item href="#action/3.1">Bustos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sessão Indisponível</NavDropdown.Item>
            </NavDropdown>
          */}
          </Nav>
          <Nav>
            <Nav.Link style={linkStyles} href="https://shopee.com.br/artacril" target='_blank'>
              <img style={iconStyles} src='https://img.icons8.com/color/480/shopee.png' />Shopee
            </Nav.Link>
            <Nav.Link style={linkStyles} eventKey={2} href="http://wa.me/5521980304952/" target='_blank'>
              <img style={iconStyles} src='https://imagepng.org/wp-content/uploads/2017/08/whatsapp-icone-4.png' />Orçamento
            </Nav.Link>
            <Nav.Link style={linkStyles} eventKey={3} href="https://www.instagram.com/artacril/" target='_blank'>
              <img style={iconStyles} src='https://raw.githubusercontent.com/fael-atom/instagram-login-page/master/images/instagram-logo2.png' />@artacril
            </Nav.Link>
            <Nav.Link style={linkStyles} href="/editorial">Editorial</Nav.Link>
            <Nav.Link style={linkStyles} href="/sobre-nos">Sobre Nós</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraDeNavegacao;