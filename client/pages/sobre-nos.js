import { Col, Container, Image, Row } from "react-bootstrap"
import CardSobreNos from "../src/components/cardSobreNos"


export default function SobreNos() {
    const espacoPadding = {
        padding: '20px'
    }
    return (
        <Container style={espacoPadding}>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <CardSobreNos />
                </Col>
                <Col sm={12} md={12} lg={12}>
                </Col>
                <Col md={{ span: 8, offset: 2 }}>
                </Col>
            </Row>
        </Container>
    )
}