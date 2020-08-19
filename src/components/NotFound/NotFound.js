import React from 'react';

const NotFound = ({ staticContext = {} }) => {
  if (staticContext) {
    staticContext.status = 404;
  }

  return (
    <>
      <h1>Not Found</h1>
      <p>The page you looking for doesn't exist</p>
    </>
  );
};

export default NotFound;
