import React from 'react';
import FooterSection from '../components/FooterSection';

const playground = () => {
  const handleClick = () => {
    const anchor = document.querySelector('#signup-section');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <FooterSection goToSignUp={handleClick} />
  );
};

export default playground;
