import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import FormContainer from '../components/formContainer.component';
import Loader from '../components/loader.component';
const Login = ({ location, history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [warnMsg, setWarnMsg] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!username) {
      setWarnMsg('enter username');
    } else {
      if (!password) {
        setWarnMsg('enter password');
      } else {
        setWarnMsg('');
        dispatch(login(username, password));
      }
    }
  };

  return (
    <FormContainer>
      {loading ? (
        <Loader></Loader>
      ) : warnMsg ? (
        <Alert variant='warning'> {warnMsg}</Alert>
      ) : error ? (
        <Alert variant='danger'>{error}</Alert>
      ) : (
        ''
      )}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='username'>
          <Form.Label>username</Form.Label>
          <Form.Control
            type='number'
            placeholder='enter userid as your username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>password</Form.Label>
          <Form.Control
            type='password'
            placeholder='enter your password (hint:123456)'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' varient='primary' className='my-2'>
          submit
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Login;
