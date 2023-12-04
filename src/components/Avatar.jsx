import React from 'react';


export default function Avatar(probs) {
  return <img className="circle-img"
    src={probs.imgSrc}
    alt={probs.imgAlt}
  />;
};