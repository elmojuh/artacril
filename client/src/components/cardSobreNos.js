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
        padding: '15px'
    }
    return (
        <Row xs={1} md={1} lg={1} className="g-4">
            <Col>
                <Card style={fundoCard}>
                    <Card.Img variant="top" key={1} src="/images/logo/logo_02.png" alt='Logo da Art Acril' style={fundoFoto} />
                    <Card.Body>
                        <Card.Title>Art Acril - Expositores em Acrílico: Uma História de Dedicação e Qualidade</Card.Title>
                        <Card.Text>
                            Fundada em 2016, mas com uma história de mais de 30 anos no mercado, a Art Acril é referência na fabricação de expositores em acrílico para diversas lojas, joalherias, lojistas, empresários e microempreendedores. Nossa trajetória começou muito antes do ano 2000, com o Sr. Geovani, visionário e fundador da Art Acril, que deu início a esse empreendimento em uma empresa de expositores em acrílico, desenvolvendo modelos exclusivos que se destacaram no mercado e que ainda hoje são amplamente reconhecidos.
                            <br /><br />
                            Movido por sua paixão pelo artesanato e pelo desejo de realizar seus próprios objetivos, o Sr. Geovani decidiu empreender e fundar a Art Acril, abandonando seu emprego e apostando em sua visão única de negócio. A partir daí, conquistou a confiança de uma ampla base de clientes, amigos e parceiros, que utilizam e revendem seus expositores até os dias atuais. Essa confiança proporcionou um crescimento significativo, permitindo expandir e fortalecer ainda mais nossa empresa.
                            <br /><br />
                            Em 2016, a Art Acril deu mais um passo importante em sua jornada, quando o filho de Sr. Geovani, Gabriel, mostrou grande interesse em seguir os passos do pai no ramo artesanal. Desde então, pai e filho tornaram-se sócios, trabalhando juntos para manter os altos padrões de qualidade e autenticidade que definem nossos produtos.
                            <br /><br />
                            Hoje, contamos com uma moderna fábrica e, embora atualmente operemos principalmente como uma loja online, estamos ansiosos para em breve inaugurar nossa loja física. Nossa dedicação em proporcionar a melhor experiência aos nossos clientes é constante, buscando sempre oferecer produtos de excelência e um atendimento impecável.
                            <br /><br />
                            Agradecemos a todos os clientes que confiaram em nosso trabalho ao longo dos anos e que nos apoiaram em nossa jornada. Sem vocês, não teríamos alcançado todo o sucesso e reconhecimento que temos hoje.
                            <br /><br />
                            Seja você um cliente fiel de longa data ou esteja nos conhecendo agora, queremos recebê-lo calorosamente para fazer parte da nossa história. Na Art Acril, a paixão pelo artesanato e a busca pela excelência estão presentes em cada peça que produzimos.
                            <br /><br />
                            Sejam muito bem-vindo à Art Acril - Expositores em Acrílico!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default CardSobreNos;