import React from 'react';
import Avatar from './Avatar';
import Detail, { Email } from './Detail';

export default function Card(probs) {
  return <div>

    <div className="card">
      <div className="top">
      <Detail
          detailInfo={probs.id}
        />

        <h2 className="name">{probs.name}</h2>
        {/* Avatar Component */}
        < Avatar
          // Consider the properties that we declare here is like the vars of the function body

          imgSrc={probs.img}
          imgAlt="The Avatar Photo"
        />
      </div>
      <div className="bottom">
        {/* First Param */}
        <Detail
          detailInfo={probs.tel}
        />
        {/* Second Param */}
        < Detail
          detailInfo={probs.email} />
      </div>
    </div>
  </div>
};