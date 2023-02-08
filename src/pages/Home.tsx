import { Carousel, Container } from "react-bootstrap";
import "../styles/Home.css";

export function Home() {
  return <>
  <div className="home-container" >
  <img src="/imgs/aas.jpg"/>
  <img src="/imgs/atix-naranja.png" className="centered"/>
  </div>
{/*   <div className="carousel-container">
  <h1> Nuestros productos</h1> */}

  <Container className="mt-3">
  <Carousel className="border" variant="dark">
    <Carousel.Item >
      <div className="d-flex">
      <img width="300px" src="imgs/frutosSecos.jpg"/>
      <img width="300px" src="imgs/granola.jpg"/>
      <img width="300px" src="imgs/mermeladas.jpg"/>
      <img width="300px" src="imgs/miel.jpg"/>
      </div>
    </Carousel.Item>
    <Carousel.Item /* classNam"d-flex" */>
    <div className="d-flex">
      <img width="300px" src="imgs/snacks.jpg"/>
      <img width="300px" src="imgs/sales.jpg"/>
      <img width="300px" src="imgs/cerealesad.jpg"/>
      <img width="300px" src="imgs/cerealac.jpg"/>
      </div>
      </Carousel.Item>
  </Carousel>
  </Container>
{/*   </div> */}
  </>
}
