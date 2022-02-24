import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, getComments } from '../actions/postActions';
import { Container, Card, ListGroup, Badge } from 'react-bootstrap';
import { withRouter, useHistory } from 'react-router-dom';

const Post = (match) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const thePost = useSelector((state) => state.thePost);
  const { loading, error, post } = thePost;

  const commentList = useSelector((state) => state.commentList);
  const { loading: loadingCom, error: errorCom, comments } = commentList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push(`/login`);
    } else {
      dispatch(getPost(match.match.params.id));
      dispatch(getComments(match.match.params.id));
    }
  }, [dispatch, match, userInfo]);
  return (
    <Container>
      {loading ? 'l' : error ? 'e' : ''}
      {post && (
        <Card className='m-4'>
          <Card.Header style={{ fontSize: '2rem' }}>{post.title}</Card.Header>
          <Card.Body>
            <Card.Text style={{ fontSize: '1.5rem' }}>{post.body} </Card.Text>
            {comments &&
              comments.map((c) => (
                <ListGroup variant='light m-2'>
                  <ListGroup.Item>
                    {c.body + ' '}
                    <Badge bg='secondary'>{c.name}</Badge>
                  </ListGroup.Item>
                </ListGroup>
              ))}
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default withRouter(Post);
