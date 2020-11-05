import { Container, Col, Row, Card, ProgressBar } from 'react-bootstrap';
import Image from 'next/image';

export default function webdesign() {
  return (
    <section id="webdesign" className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
           <h1 className="text-center titlesec mb-4" data-aos="zoom-in-up" data-aos-delay="350">Web Design</h1>
        <p className="descript text-white text-center mb-3" data-aos="fade" data-aos-delay="650">Desde criação de um site HTML, CSS &amp; JS simples até um E-commerce. Deixando o SEO pronto para os motores de buscas.</p>
      
      <Container>
      <Row sm={2} md={3} lg={6}>

        <Col className="mb-5">
          <Card className="h-100" data-aos="zoom-in-down" data-aos-delay="350">
            <Image src="/word.png" width={158} height={154}></Image>
            <Card.Body>
              <Card.Title className="text-center">Wordpress</Card.Title>
              <ProgressBar variant="success" now={100} label={'100%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100" data-aos="zoom-in-down" data-aos-delay="450">
            <Image src="/woo.png" width={158} height={154}></Image>
            <Card.Body>
              <Card.Title className="text-center">Woo</Card.Title>
              <ProgressBar variant="success" now={90} label={'90%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100" data-aos="zoom-in-down" data-aos-delay="550">
            <Image src="/html.png" width={158} height={154}></Image>
            <Card.Body>
              <Card.Title className="text-center">HTML</Card.Title>
              <ProgressBar variant="success" now={100} label={'100%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100" data-aos="zoom-in-down" data-aos-delay="650">
            <Image src="/css.png" width={158} height={154}></Image>
            <Card.Body>
              <Card.Title className="text-center">CSS</Card.Title>
              <ProgressBar variant="success" now={100} label={'100%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100" data-aos="zoom-in-down" data-aos-delay="750">
            <Image src="/php.png" width={158} height={154}></Image>
            <Card.Body>
              <Card.Title className="text-center">PHP</Card.Title>
              <ProgressBar variant="success" now={50} label={'50%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100" data-aos="zoom-in-down" data-aos-delay="850">
            <Image src="/js.png" width={158} height={154}></Image>
            <Card.Body>
              <Card.Title className="text-center">Javascript</Card.Title>
              <ProgressBar variant="success" now={65} label={'65%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100" data-aos="zoom-in-up" data-aos-delay="950">
            <Image src="/react.png" width="154" height={154}></Image>
            <Card.Body>
              <Card.Title className="text-center">ReactJS</Card.Title>
              <ProgressBar variant="success" now={65} label={'65%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100" data-aos="zoom-in-down" data-aos-delay="1050">
            <Image src="/nextjs.png" width="154" height={154}></Image>
            <Card.Body>
              <Card.Title className="text-center">NextJS</Card.Title>
              <ProgressBar variant="success" now={55} label={'55%'} />
            </Card.Body>
          </Card>
        </Col>

        <Col className="mb-5">
          <Card className="h-100" data-aos="zoom-in-down" data-aos-delay="1250">
            <Image src="/seo.png" width={158} height={154}></Image>
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