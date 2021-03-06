import React from 'react';

export default function Clock1030(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <circle cx={32} cy={32} r={30} fill="#62727a" />
      <g fill="#fff">
        <path d="m30 26h4v32h-4z" />
        <path transform="matrix(.7071-.7071.7071.7071-11.5983 27.9992)" d="m26 15.9h4v24.2h-4z" />
        <circle cx={32} cy={32} r={4} />
      </g>
      <circle cx={32} cy={32} r={3} fill="#62727a" />
    </svg>
  );
}
