import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio({ beha }) {
  return (
    <section id="port" className="h-100 d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-center titlesec animate__fadeIn shouldAnimate delay-050 mb-4">Portfólio</h1>
      <p className="descript text-white animate__fadeIn shouldAnimate delay-065 text-center mb-3">Algumas coisas ja feitas por mim. Sites, folders, social midia, etc.</p>
      <Container>
        <Row xs={2} sm={2} lg={4}>
          {beha.projects.map((behance, i) => (i < 8 &&
            <Col key={behance.id} className="mb-3 col">
              <Card className="h-100">
                <Link href={behance.url}><a target="_blank">
                  <Image src={behance.covers['original']} width={250} height={180}></Image>
                  <Card.Title className="text-black text-center">{behance.name}</Card.Title>
                </a>
                </Link>
              </Card>
            </Col>

          ))}
        </Row>



      </Container>
    </section>
  )
}

