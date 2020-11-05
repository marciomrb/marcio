import { Container, Col, Row, Card, ProgressBar } from 'react-bootstrap';
import Image from 'next/image';


export default function Design() {
 
  return (
    <section id="designer" className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h1 className="text-center titlesec mb-4" data-aos="zoom-in-up" data-aos-delay="350">Designer Gráfico</h1>
      <p className="descript text-white text-center mb-3" data-aos="fade" data-aos-delay="650">Com o tempo aprendi varios programas de Designer gráfico,
      abaixo estão listados alguns... Com esses programas aprendi a criação de logotipos, folders, cartão de visita, peças publicitárias,
        catálogos, edição de video e edição de fotos.</p>

      <Container>
        <Row xs={2} sm={2} lg={6}>

          <Col className="mb-5">
            <Card className="h-100" data-aos="fade-down" data-aos-delay="250">
              <Image src="/ps1.png"cl width={158} height={154} layout="responsive"></Image>
              <Card.Body>
                <Card.Title className="text-center">Photoshop</Card.Title>
                <ProgressBar variant="success" now={100} label={'100%'} />
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-5">
            <Card className="h-100" data-aos="fade-down" data-aos-delay="450">
              <Image src="/ai.png"cl width={158} height={154} layout="responsive"></Image>
              <Card.Body>
                <Card.Title className="text-center">Illustrator</Card.Title>
                <ProgressBar variant="success" now={95} label={'95%'} />
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-5">
            <Card className="h-100" data-aos="fade-down" data-aos-delay="200">
              <Image src="/id.png"cl width={158} height={154} layout="responsive"></Image>
              <Card.Body>
                <Card.Title className="text-center">Indesign</Card.Title>
                <ProgressBar variant="success" now={90} label={'90%'} />
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-5">
            <Card className="h-100" data-aos="fade-down" data-aos-delay="400">
              <Image src="/xd.png"cl width={158} height={154} layout="responsive"></Image>
              <Card.Body>
                <Card.Title className="text-center">Adobe XD</Card.Title>
                <ProgressBar variant="success" now={95} label={'95%'} />
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-5">
            <Card className="h-100" data-aos="fade-down" data-aos-delay="350">
              <Image src="/dn.png"cl width={158} height={154} layout="responsive"></Image>
              <Card.Body>
                <Card.Title className="text-center">Dimension</Card.Title>
                <ProgressBar variant="success" now={60} label={'60%'} />
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-5">
            <Card className="h-100" data-aos="fade-down" data-aos-delay="550">
              <Image src="/pr.png"cl width={158} height={154} layout="responsive"></Image>
              <Card.Body>
                <Card.Title className="text-center">Premiere</Card.Title>
                <ProgressBar variant="success" now={40} label={'40%'} />
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-5">
            <Card className="h-100" data-aos="fade-up" data-aos-delay="350">
              <Image src="/aa.png"cl width={158} height={154} layout="responsive"></Image>
              <Card.Body>
                <Card.Title className="text-center">After Effects</Card.Title>
                <ProgressBar variant="success" now={50} label={'50%'} />
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-5">
            <Card className="h-100" data-aos="fade-up" data-aos-delay="250">
              <Image src="/ic.png"cl width={158} height={154} layout="responsive"></Image>
              <Card.Body>
                <Card.Title className="text-center">InCopy</Card.Title>
                <ProgressBar variant="success" now={80} label={'80%'} />
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-5">
            <Card className="h-100" data-aos="fade-up" data-aos-delay="150">
              <Image src="/au.png"cl width={158} height={154} layout="responsive"></Image>
              <Card.Body>
                <Card.Title className="text-center">Audition</Card.Title>
                <ProgressBar variant="success" now={40} label={'40%'} />
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-5">
            <Card className="h-100" data-aos="fade-up" data-aos-delay="450">
              <Image src="/lr.png"cl width={158} height={154} layout="responsive"></Image>
              <Card.Body>
                <Card.Title className="text-center">Lightroom</Card.Title>
                <ProgressBar variant="success" now={70} label={'70%'} />
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-5">
            <Card className="h-100" data-aos="fade-up" data-aos-delay="650">
              <Image src="/corel.png"cl width={158} height={154} layout="responsive"></Image>
              <Card.Body>
                <Card.Title className="text-center">Corel Draw</Card.Title>
                <ProgressBar variant="success" now={99} label={'99%'} />
              </Card.Body>
            </Card>
          </Col>

          <Col className="mb-5">
            <Card className="h-100" data-aos="fade-up" data-aos-delay="250">
              <Image src="/aff.png"cl width={158} height={154} layout="responsive"></Image>
              <Card.Body>
                <Card.Title className="text-center">Affinity Designer</Card.Title>
                <ProgressBar variant="success" now={100} label={'100%'} />
              </Card.Body>
            </Card>
          </Col>



        </Row>

      </Container>
    </section>
  )
}