import Carousel from 'react-bootstrap/Carousel';

export default function Carrossel() {
  return (
    <Style>
      <div className="carousel-wrapper">
        <Carousel fade className='max-carousel'>
        <Carousel.Item>
            <img
              className="d-block w-100 "
              src="/images/produtos/Expositor_Kit_1.jpg"
              alt="Expositor_Kit_01"
            />
            <Carousel.Caption>
              <h3>Kit 01</h3>
              <p>Ideal para quem precisa de expositores para joias que estão começando seus negócios.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="/images/produtos/Expositor_Kit_2.jpg"
              alt="Expositor_Kit_02"
            />
            <Carousel.Caption>
              <h3>Kit 02</h3>
              <p>Perfeito para quem já possui uma grande variedade de peças.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="/images/produtos/Expositor_Kit_3.jpg"
              alt="Expositor_Kit_03"
            />
            <Carousel.Caption>
              <h3 style={{color: "black"}}>Kit 03</h3>
              <p style={{color: "black"}}>Completo para quem quer expor peças com os mais diversos modelos da Art Acril.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="/images/produtos/Expositor_Busto_MAN_Preto_de_Lado_2.jpg"
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
              src="/images/produtos/Expositor_Busto_Cisne_De_Lado_2.jpg"
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
              src="/images/produtos/Expositor_Busto_Bola_Varidedade_2.jpg"
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
            max-height: 1000px;
            max-width: 700px;
          }
          .max-carousel{
            max-heigth: 900px;
            max-width: 600px;
          }
        `}
        </style>
      </div>
    )
  }
}
