import React, { useEffect, useState } from 'react';
import { Form, Button, Alert, Modal, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';

import Loader from '../components/loader.component';
const ModalLogin = ({ history }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [warnMsg, setWarnMsg] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  // const redirect = location.search ? location.search.split('=')[1] : '/posts';

  useEffect(() => {
    if (userInfo) {
      // history.push(redirect);
      history.goBack();
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!username) {
      setWarnMsg('نام کاربری را وارد کنید');
    } else {
      if (!password) {
        setWarnMsg('رمز را وارد کنید');
      } else {
        setWarnMsg('');
        dispatch(login(username, password));
      }
    }
  };

  return (
    <div style={{ filter: `blur(${show ? '8px' : '0px'})` }}>
      <Container className='text-center'>
        <Row style={{ fontSize: '100px' }}>
          <span>سلام</span>
        </Row>
        <Row>
          <span>خوش آمدید</span>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} centered className='p-2'>
        {loading ? (
          <Loader></Loader>
        ) : warnMsg ? (
          <Alert variant='warning'> {warnMsg}</Alert>
        ) : error ? (
          <Alert variant='danger'>{error}</Alert>
        ) : (
          ''
        )}
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='username'>
              <Form.Label>نام کاربری</Form.Label>
              <Form.Control
                type='number'
                placeholder='آیدی کاربر را به عنوان نام کاربری وارد کنید'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label>رمز عبور</Form.Label>
              <Form.Control
                type='password'
                placeholder='رمز عبور را وارد کنید (راهنما:123456)'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type='submit' varient='primary' className='my-2'>
              ورود
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalLogin;
