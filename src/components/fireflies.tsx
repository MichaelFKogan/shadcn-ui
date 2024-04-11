import React from 'react';

const Fireflies = () => {
  const quantity = 15;

  const fireflies = [];
  for (let i = 1; i <= quantity; i++) {
    fireflies.push(<div key={i} className="firefly"></div>);
  }

  return <div>{fireflies}</div>;
};

export default Fireflies;
