
import { Container, Row, Col } from 'react-bootstrap';

import JsonData from '../data/data.json';

export function Home() {
  return (
    <header id='Home'>
        <div className='intro'>
          <div className='overlay'>
          <Container >
              <Row>
                <Col   md={{ span: 8, offset: 2 }} className=' intro-text'>
                <h1>
                    {JsonData ? JsonData.Header.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p>{JsonData ? JsonData.Header.paragraph : 'Loading'}</p>
                  <a
                    href='#features'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    Más información
                  </a>{' '}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </header>
  );
}