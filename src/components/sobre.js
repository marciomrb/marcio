import Image from 'next/image';
import Link from 'next/link';
import { Container, Col, Row } from 'react-bootstrap';


export default function Sobre() {
  return (
    <section id="sobreMim" className="d-flex align-items-center min-vh-100">
      <Container >
        <Row lg={2}>

          <Col lg={6} className="col">
            <Image src="/mc.png" width={540} height={640} loading="eager" className="animate__bounceInLeft shouldAnimate animate_slow delay-025"></Image>
          </Col>

          <Col lg={6} className="my-auto animate__bounceInRight shouldAnimate col">
            <div className="sobreText">
              <h2 className="text-center animate__bounceInDown delay-025 shouldAnimate">Sobre Mim</h2>
              <p className="text-justify p-1 texto text-white"><code>Olá mundo!</code> Meu nome é Márcio Campos, sou casado
              e moro em Tietê-SP. Sou Designer Gráfico e Web Designer! Gosto muito de aprender ferramentas novas, sempre estou procurando aprender.
              Tudo que sei foi fruto do meu esforço, procurando video aulas, pdf's. Aprendi a maioria das coisas no Youtube, fiz alguns cursos,
              mas eu ja estava mais avançado. Estou sempre procurando a melhoras, procurando cursos, video aulas e tutoriais!</p>

              <ul className="socialmidia">
                <li className="animate__bounceInUp delay-015 shouldAnimate"><Link href="//facebook.com/marciomrb1"><a target="_blank"><Image src="/facebook.svg" width="30" height="30"></Image></a></Link></li>
                <li className="animate__bounceInUp delay-035 shouldAnimate"><Link href="//instagram.com/marciocamposmrb"><a target="_blank"><Image src="/instagram.svg" width="30" height="30"></Image></a></Link></li>
                <li className="animate__bounceInUp delay-050 shouldAnimate"><Link href="//linkedin.com/in/marciomrb/"><a target="_blank"><Image src="/ind.svg" width="30" height="30"></Image></a></Link></li>
                <li className="animate__bounceInUp delay-065 shouldAnimate"><Link href="//behance.net/marciomrb"><a target="_blank"><Image src="/behance.svg" width="30" height="30"></Image></a></Link></li>
              </ul>
            </div>
          </Col>

        </Row>



      </Container>
    </section>
  )
}