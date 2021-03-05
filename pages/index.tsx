import React from 'react';
import OnePlaceSection from '../components/OnePlaceSection';
import AdvantagesSection from '../components/AdvantagesSection';
import ShowcaseSection from '../components/ShowcaseSection';
import SignUpSection from '../components/SignUpSection';
import FooterSection from '../components/FooterSection';

export type GoToSignUpType = {
  goToSignUp: () => void;
};

const index = () => {
  const handleClick = () => {
    const anchor = document.querySelector('#signup-section');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (
    <>
      <ShowcaseSection goToSignUp={handleClick} />
      <OnePlaceSection />
      <AdvantagesSection />
      <SignUpSection />
      <FooterSection goToSignUp={handleClick} />
    </>
  );
};

export default index;
