
export default function curriculo() {
  const formatacao = {
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '50px',
    fontFamily: 'sans-serif'
  }
  const error = {
    color: '#FFFFFF',
    textAlign: 'center',
  }
  return (
    <div style={formatacao}>
      <h1 variant="h4">ERRO 404</h1>
      <h3 variant="h5">Por enquanto o caminho indisponível</h3>
      <h3 variant="h5">Conteudo em breve disponível</h3>
      <h3 variant="h5">Proxima atualização pós Carmaval</h3>
      <a href="/">
        <h1>Ir para Home</h1>
      </a>
    </div>
  );
}
