import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardSobreNos() {
    const fundoCard = {
        backgroundColor: 'grey',
        color: '#ffffff',
    }
    const fundoFoto = {
        backgroundColor: '#193366',
        padding: '10px'
    }
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card style={fundoCard}>
                        <Card.Img variant="top" src="/images/logo/logo_02.png" style={fundoFoto}/>
                        <Card.Body>
                            <Card.Text >
                                A Art Acril se orgulha de sua longa tragetória em sua pequena fábrica de expositores em acrílico do Seu Geovanne.
                                Que ao longo de 30 anos cria modelos artezanais com o maior grau de sofisticação e requinte.
                                É reconhecido até hoje como referência em beleza e resistencia de materiais em acrílico de primeira linha
                                pelos joalheiros e logistas do Rio de Janeiro.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default CardSobreNos;