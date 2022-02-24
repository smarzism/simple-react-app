import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPostList } from '../actions/postActions';
import { Container, Card, Alert } from 'react-bootstrap';
import { withRouter, useHistory } from 'react-router-dom';
import Loader from '../components/loader.component';
const Posts = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push(`/login`);
    } else {
      dispatch(getUserPostList(userInfo.id));
    }
  }, [dispatch, userInfo]);

  return (
    <Container>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Alert variant='danger'>{error}</Alert>
      ) : (
        ''
      )}
      {posts &&
        posts.map((p) => (
          <Card className='m-4' key={p.id}>
            <Card.Header
              style={{ cursor: 'pointer' }}
              onClick={() => history.push(`/post/${p.id}`)}
            >
              {p.title}
            </Card.Header>
            <Card.Body>
              <Card.Text>{p.body} </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </Container>
  );
};

export default withRouter(Posts);
