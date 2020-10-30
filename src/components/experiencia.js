import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Image from 'next/image';

export default function Experiencia() {
  return (
    <section id="expe" className="h-100 d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-center titlesec animate__fadeIn shouldAnimate delay-050 mb-5">Expêriencia Profissional</h1>
     <Container>
       <Row lg={2}>
          <Col lg={6} className="col">
          <ListGroup>
            <ListGroup.Item className="list-item-custom">
              <div className="list1">
                <div className="title-list">Dubflex Componentes de Calçados</div>
                <div class="subtitle-list">Auxiliar de Produção</div>
                <small>Tietê-SP</small>
              </div>
              <div className="list2">
                8 Meses
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="list-item-custom">
              <div className="list1">
                <div className="title-list">Case Propaganda & Aldoor</div>
                <div class="subtitle-list">Assistente de Arte / Criação de Artes</div>
                <small>Avaré-SP</small>
              </div>
              <div className="list2">3 Meses</div>
            </ListGroup.Item>
            <ListGroup.Item className="list-item-custom">
              <div className="list1">
                <div className="title-list">Colégio TytoAlba</div>
                <div class="subtitle-list">Designer Gráfico | Web Designer | Técnico de Informática</div>
                <small>Avaré-SP</small>
              </div>
              <div className="list2">8 Meses</div>
            </ListGroup.Item>

            <ListGroup.Item className="list-item-custom">
              <div className="list1">
                <div className="title-list">Scarcelli Embalagens</div>
                <div class="subtitle-list">Desenhista Técnico Auxiliar: Criação de Artes para embalagens</div>
                <small>Avaré-SP</small>
              </div>
              <div className="list2">3 Meses</div>
            </ListGroup.Item>

            <ListGroup.Item className="list-item-custom">
              <div className="list1">
                <div className="title-list">Paulo Pereira | Modamaxx</div>
                <div class="subtitle-list">Web Designer & Designer Gráfico</div>
                <small>Tietê-SP</small>
              </div>
              <div className="list2">3 Anos</div>
            </ListGroup.Item>
           
        </ListGroup>
          </Col>


          <Col lg={6}>
            <Image src="/work.svg" unsized></Image>
          </Col>


       </Row>
     </Container>  
  
    </section>
  )
}