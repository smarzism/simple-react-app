import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = ({}) => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '10px',
        height: '10px',
        display: 'block',
        margin: 'auto',
        color: '',
      }}
    >
      <span className='sr-only'>Loading</span>
    </Spinner>
  );
};

export default Loader;
