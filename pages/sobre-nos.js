import { Col, Container, Image, Row } from "react-bootstrap"


export default function SobreNos() {
    const formatacao = {
        color: '#FFFFFF',
    }
    const logo = {
        padding: '20px',
    }
    const textoCentral = {
        fontSize: '2em',
        textAlign: 'justify',
    }
    const artAcril = {
        fontSize: '3em',
        padding: '0px 5px 0px 5px',
        display: 'inline-block'
    }
    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}><div style={formatacao}>
                    <Image src="/images/logo/logo_02.png" style={logo} />
                    <span style={textoCentral}>A </span> <span style={artAcril}> Art Acril</span> <span style={textoCentral}> se orgulha de sua longa tragetória em sua pequena fábrica de expositores em acrílico do Seu Geovanne. Que ao longo de 30 anos cria modelos artezanais com o maior gral de sofisticação e requinte. É reconhecido até hoje como referência em beleza e resistencia de materiais em acrílico de primeira linha pelos joalheiros e logistas do Rio de Janeiro.</span>
                </div></Col>
            </Row>
        </Container>
    )
}