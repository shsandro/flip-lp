import React from 'react';
import { AnimationPartsProps } from './Gear';

const LuneteBase = (props:AnimationPartsProps) => {
  const { className, strokeWidth = 0.12, color = '#D2D3D5' } = props;
  return (

    <svg viewBox="0 0 24 11" className={className}>

      <g>
        <path fill="none" stroke={color} strokeWidth={strokeWidth} d="M4.88 10.38l1.56 0c0.46,0 0.84,0.38 0.84,0.84l0 0.04 -3.24 0 0 -0.04c0,-0.46 0.38,-0.84 0.84,-0.84zm12.68 0l1.56 0c0.46,0 0.84,0.38 0.84,0.84l0 0.04 -3.24 0 0 -0.04c0,-0.46 0.38,-0.84 0.84,-0.84z" />
        <path fill="none" stroke={color} strokeWidth={strokeWidth} d="M12.65 0.5l5.7 9.87m-7 -9.87l-5.7 9.87" />
        <line fill="none" stroke={color} strokeWidth={strokeWidth} x1="16.11" y1="6.5" x2="16.12" y2="6.5" />
        <polygon fill="none" stroke={color} strokeWidth={strokeWidth} points="7.9,6.5 16.11,6.5 " />
        <line fill="none" stroke={color} strokeWidth={strokeWidth} x1="7.89" y1="6.5" x2="7.9" y2="6.5" />
      </g>

    </svg>

  );
};

export default LuneteBase;
