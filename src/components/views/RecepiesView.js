import React, { useState } from 'react';

const RecepiesView = (props) => {
  const [mealType, setMealType] = useState('all');
  const [myRecepies, setMyRecepies] = useState(false);

  const handleMealTypeChange = (event) => {
    setMealType(event.target.value);
  };

  const handleMyRecepiesChange = () => {
    setMyRecepies(!myRecepies);
  };

  return (
    <div className="recepies-view">
      <form className="filters-form">
        <label>
        <div>Type of meal:</div>
          <div className="filters-form__input">
            <select value={mealType} onChange={handleMealTypeChange}>
              <option value="breakfast">breakfast</option>
              <option value="lunch">lunch</option>
              <option value="supper">supper</option>
              <option value="dinner">dinner</option>
              <option value="dessert">dessert</option>
              <option value="all">all</option>
            </select>
          </div>
        </label>

        <label>
          <div>My recepies:</div>

          <div className="filters-form__input">
            <input
              className="checkbox"
              type="checkbox"
              checked={myRecepies}
              onChange={handleMyRecepiesChange}
            />
          </div>
        </label>
      </form>
    </div>
  );
};

export default RecepiesView;
