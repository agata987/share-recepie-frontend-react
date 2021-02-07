import React from 'react';
import CookingImage from '../../svg/undraw_cooking_lyxy.svg'

const MainView = (props) => {
  return (
    <div className="main-view"> 
      <div className="page-description">
        <h1 className="page-description__title">Share your recepie!</h1>
        <p className="page-description__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          obcaecati quasi nisi ab dolorem porro illum quisquam ipsa. Atque minus
          vero nemo. Porro quaerat similique alias exercitationem labore, sequi
          quisquam?
        </p>
      </div>
      <div className="image-container">
        <img src={CookingImage} className='image' alt="Cooking Image"/>
      </div>
    </div>
  );
};

export default MainView;
