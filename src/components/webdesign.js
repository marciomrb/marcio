import { Container, Col, Row, Card, ProgressBar } from 'react-bootstrap';
import Image from 'next/image';

export default function webdesign() {
  return (
    <section id="designer" className="h-100 d-flex flex-column align-items-center justify-content-center">
           <h1 className="text-center titlesec animate__fadeIn shouldAnimate delay-050 mb-4">Web Design</h1>
        <p className="descript text-white animate__fadeIn shouldAnimate delay-065 text-center mb-3">Desde criação de um site HTML, CSS &amp; JS simples até um E-commerce. Deixando o SEO pronto para os motores de buscas.</p>
      
      <Container>
      <Row sm={2} md={3} lg={6}>

        <Col className="mb-5">
          <Card className="h-100 animate__fadeInDown shouldAnimate">
            <Image src="/word.png" width="158" height="154"></Image>
            <Card.Body>
              <Card.Title className="text-center">Wordpress</Card.Title>
              <ProgressBar variant="success" now={100} label={'100%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100 animate__fadeInDown shouldAnimate delay-025">
            <Image src="/woo.png" width="158" height="154"></Image>
            <Card.Body>
              <Card.Title className="text-center">Woo</Card.Title>
              <ProgressBar variant="success" now={90} label={'90%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100 animate__fadeInDown shouldAnimate delay-035">
            <Image src="/html.png" width="158" height="154"></Image>
            <Card.Body>
              <Card.Title className="text-center">HTML</Card.Title>
              <ProgressBar variant="success" now={100} label={'100%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100 animate__fadeInDown shouldAnimate delay-035">
            <Image src="/css.png" width="158" height="154"></Image>
            <Card.Body>
              <Card.Title className="text-center">CSS</Card.Title>
              <ProgressBar variant="success" now={100} label={'100%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100 animate__fadeInDown shouldAnimate delay-045">
            <Image src="/php.png" width="158" height="154"></Image>
            <Card.Body>
              <Card.Title className="text-center">PHP</Card.Title>
              <ProgressBar variant="success" now={50} label={'50%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100 animate__fadeInDown shouldAnimate delay-050">
            <Image src="/js.png" width="158" height="154"></Image>
            <Card.Body>
              <Card.Title className="text-center">Javascript</Card.Title>
              <ProgressBar variant="success" now={65} label={'65%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100 animate__fadeInUp shouldAnimate delay-055">
            <Image src="/react.png" width="154" height="154"></Image>
            <Card.Body>
              <Card.Title className="text-center">ReactJS</Card.Title>
              <ProgressBar variant="success" now={65} label={'65%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100 animate__fadeInUp shouldAnimate delay-060">
            <Image src="/nextjs.png" width="154" height="154"></Image>
            <Card.Body>
              <Card.Title className="text-center">ReactJS</Card.Title>
              <ProgressBar variant="success" now={55} label={'55%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100 animate__fadeInUp shouldAnimate delay-065">
            <Image src="/seo.png" width="158" height="154"></Image>
            <Card.Body>
              <Card.Title className="text-center">SEO</Card.Title>
              <ProgressBar variant="success" now={75} label={'75%'} />
            </Card.Body>
          </Card>
        </Col>



      </Row>

      </Container>
    </section>
  )
}