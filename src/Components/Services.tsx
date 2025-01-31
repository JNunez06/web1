
import { Container, Row, Col } from 'react-bootstrap';
import {default as JsonData} from "../data/data.json";


export function Services()
{
    return(
        <div id='Services' className='text-center'>
        <Container>
          <div className='section-title'>
            <h2>Nuestros Servicios</h2>
            <p>
              DevPro ofrece servicios en desarrollo y diseño de aplicaciones web y móviles, marketing digital, diseño gráfico y más.
            </p>
          </div>
          <Row>
          {JsonData
              ? JsonData.Services.map((d, i) => (
                  <Col md={4} key={`${d.name}-${i}`} >
                    {' '}
                    
                    <div className='service-desc'>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </Col>
                ))
              : 'loading'}
          </Row>
        </Container>
      </div>
    )

}