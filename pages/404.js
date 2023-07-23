import Card from 'react-bootstrap/Card';

const formatacao = {
  color: '#FFFFFF',
  textAlign: 'center',
  padding: '50px',
  fontFamily: 'sans-serif',
}
const logo = {
  width: '200px'
}

export default function curriculo() {

  return (
    <div style={formatacao}>
      <h1 variant="h4">ERRO 404</h1>
      <h3 variant="h5">Por enquanto o caminho está indisponível</h3>
      <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
        <Card.Img variant="top" key={1} src="/images/logo/logo_02.png" alt='Logo da Art Acril' style={logo} />
        <h1>Ir para Home</h1>
      </a>
    </div>
  );
}
