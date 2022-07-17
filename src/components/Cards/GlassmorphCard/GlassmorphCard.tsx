import React from 'react';
import { FC } from 'react';
import './GlassmorphCard.scss';
import { GlassmorphCardType } from './GlassmorphCard.types';


const GlassMorphCard:FC<GlassmorphCardType> = (props:GlassmorphCardType) => {
  return (
    <>
      <div className="glassBox">
        <div className="glassBox__imgBox">
          <img
            src={props.image}
          />
          <h3 className="glassBox__title">{props.title}</h3>
        </div>
        <div className="glassBox__content">
          {props.content}
        </div>
      </div>
    </>
  );
};

export default GlassMorphCard;

// <>
// <div className="glassBox">
//   <div className="glassBox__imgBox">
//     <img
//       src="https://cdn.jdpower.com/ChromeImageGallery/Expanded/Transparent/640/2010MAZ007a_640/2010MAZ007a_640_01.png"
//       alt=""
//     />
//     <h3 className="glassBox__title">Golden Shoe</h3>
//   </div>
//   <div className="glassBox__content">
//     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt
//     veniam adipisci fugit qui quaerat!
//   </div>
// </div>
// </>