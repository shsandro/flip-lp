import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AnimationPartsProps } from './Gear';

const LuneteTop = ({ className, strokeWidth = 0.12, color = '#D2D3D5' }:AnimationPartsProps) => (
  <svg viewBox="0 0 24 9" className={className}>
    <g>

      <rect fill="none" stroke={color} strokeWidth={strokeWidth} x="21.38" y="0.56" width="2.44" height="8.17" />
      <line fill="none" stroke={color} strokeWidth={strokeWidth} x1="22.6" y1="0.56" x2="22.6" y2="8.73" />
      <path fill="none" stroke={color} strokeWidth={strokeWidth} d="M21.38 1.11l-5.59 0c-0.45,0 -0.82,0.38 -0.82,0.85l0 5.37c0,0.47 0.37,0.85 0.82,0.85l5.59 0" />
      <path fill="none" stroke={color} strokeWidth={strokeWidth} d="M14.97 2l-7.35 0c-0.45,0 -0.82,0.37 -0.82,0.83l0 3.63c0,0.46 0.37,0.83 0.82,0.83l7.35 0" />
      <path fill="none" stroke={color} strokeWidth={strokeWidth} d="M1.72 6.27l5.08 0m0 -3.25l-5.08 0" />
      <path fill="none" stroke={color} strokeWidth={strokeWidth} d="M0.95 2.23l0 0c0.42,0 0.77,0.35 0.77,0.78l0 3.27c0,0.43 -0.35,0.78 -0.77,0.78l0 0c-0.43,0 -0.78,-0.51 -0.78,-0.94l0 -2.95c0,-0.43 0.35,-0.94 0.78,-0.94z" />
      <path fill="none" stroke={color} strokeWidth={strokeWidth} d="M12.92 7.29c0,0.51 -0.42,0.92 -0.92,0.92 -0.51,0 -0.93,-0.41 -0.93,-0.92" />
      <path fill="none" stroke={color} strokeWidth={strokeWidth} d="M14.15 7.29c0,1.19 -0.97,2.15 -2.15,2.15 -1.19,0 -2.16,-0.96 -2.16,-2.15" />

    </g>
  </svg>

);

export default LuneteTop;
