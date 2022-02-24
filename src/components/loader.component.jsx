import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = ({}) => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '20px',
        height: '20px',
        display: 'block',
        margin: 'auto',
        color: '',
      }}
    >
      <span className='sr-only'></span>
    </Spinner>
  );
};

export default Loader;
