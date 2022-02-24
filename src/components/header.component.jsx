import React from 'react';
import logo from '../logo.svg';
import '../App.css';

import {
  Button,
  Badge,
  Navbar,
  Nav,
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

function Header() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Navbar>
      {/*  <div className='App'>
      <header className='App-header'>
       
      </header> */}

      <Container>
        <Navbar.Brand href='/'>
          <Row>
            <Col>
              <img src={logo} className='App-logo' alt='logo' />
            </Col>
            <Col>
              {userInfo && (
                <Nav className='me-auto my-2'>
                  <Nav.Link href='/'>
                    <Badge className='dark'>{userInfo && userInfo.name}</Badge>
                  </Nav.Link>
                  <Nav.Link href='/posts'>پست ها</Nav.Link>
                </Nav>
              )}
            </Col>
          </Row>
        </Navbar.Brand>
        {userInfo ? (
          <Nav className='me-auto'>
            <Button variant='dark' onClick={logoutHandler}>
              <span>خروج از حساب</span>
            </Button>
          </Nav>
        ) : (
          <Nav className='me-auto'>
            <Nav.Link href='/login'>ورود</Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;
