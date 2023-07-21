import Carousel from 'react-bootstrap/Carousel';

export default function Carrossel() {
  return (
    <Style>
      <div className="carousel-wrapper">
        <Carousel fade className='max-carousel'>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="/images/produtos/Expositor_Busto_MAN_Preto_de_Lado.jpeg"
              alt="Expositor_Busto_MAN_Preto_de_Lado"
            />
            <Carousel.Caption>
              <h3>Expositor Busto MAN</h3>
              <p>Um dos melhores expositores para cordões. Seja ele fino, ou mais robusto.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/produtos/Expositor_Busto_Cisne_De_Lado.jpeg"
              alt="Expositor_Busto_Cisne_De_Lado"
            />

            <Carousel.Caption>
              <h3>Expositor Busto Cisne</h3>
              <p>Um clássico em todas as vitrines de joias e semijoias. Ideal para expor seu melhor conjunto de cordão e brinco</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/produtos/Expositor_Busto_Bola_Varidedade.jpeg"
              alt="Expositor_Busto_Bola_Varidedade"
            />

            <Carousel.Caption>
              <h3>Expositor Busto Bola</h3>
              <p>
                Modelos de diferentes tamanhos para atender as diversas peças
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Style>
  );
  function Style({ children }) {
    return (
      <div>
        {children}
        <style>{`
          .carousel-wrapper {
            display: flex;
            justify-content: center;
            }
          .carousel-wrapper img{
            max-height: 800px;
            max-width: 600px;
          }
          .max-carousel{
            max-heigth: 700px;
            max-width: 500px;
          }
        `}
        </style>
      </div>
    )
  }
}
