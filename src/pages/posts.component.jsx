import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userPostList } from '../actions/postActions';
import { Container, Card } from 'react-bootstrap';

const Posts = (history) => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
    } else {
      dispatch(userPostList(userInfo.id));
    }
  }, [dispatch, userInfo]);

  return (
    <Container>
      {loading ? 'l' : error ? 'e' : ''}
      {posts &&
        posts.map((p) => (
          <Card className='m-4'>
            <Card.Header>{p.title}</Card.Header>
            <Card.Body>
              <Card.Text>{p.body} </Card.Text>
            </Card.Body>
          </Card>
        ))}
    </Container>
  );
};

export default Posts;
