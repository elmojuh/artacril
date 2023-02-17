import { Col, Container, Image, Row } from "react-bootstrap"
import CardSobreNos from "../src/components/cardSobreNos"


export default function SobreNos() {
    const formatacao = {
        color: '#FFFFFF',
    }
    const textoInstagram = {
        fontSize: '25px',
        color: '#ffffff'
    }
    const instagram = {
        padding: '20px',
        maxWidth: '100px',
    }
    const espacoPadding = {
        padding: '20px'
    }
    return (
        <Container style={espacoPadding}>
            <Row>
                <Col md={{ span: 12, offset: 3 }}>
                    <CardSobreNos />
                </Col>
                <Col md={{ span: 7, offset: 3 }}>
                    <div style={formatacao}>
                        <a style={textoInstagram} href="https://www.instagram.com/artacril/" target='_blank'>Acesse: <Image style={instagram} src="https://raw.githubusercontent.com/fael-atom/instagram-login-page/master/images/instagram-logo2.png" />
                            @artacril</a>
                    </div>

                </Col>

            </Row>

        </Container>
    )
}