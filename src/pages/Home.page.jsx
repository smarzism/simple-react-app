import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Badge, Row, Col } from 'react-bootstrap';
import { logout } from '../actions/userActions';

const Home = (history) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Row className='py-2' style={{ backgroundColor: '#61dafb' }}>
        {userInfo ? (
          <>
            <Row>
              <Col>
                {/* <span>hello </span> */}
                <Badge className='dark'>{userInfo.name}</Badge>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant='dark' onClick={logoutHandler}>
                  logout
                </Button>
              </Col>
            </Row>
          </>
        ) : (
          <Row>
            <Col>
              <Button variant='dark'>
                {/* login */}
                <Link to='/login'>login</Link>
              </Button>
            </Col>
          </Row>
        )}
      </Row>
    </div>
  );
};
export default Home;
