import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className='text-center'>
      <Row style={{ fontSize: '100px' }}>
        <span>سلام</span>
      </Row>
      <Row>
        <span>خوش آمدید</span>
      </Row>
    </Container>
  );
};
export default Home;
