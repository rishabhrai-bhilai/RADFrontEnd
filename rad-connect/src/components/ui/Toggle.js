import React, { useState } from 'react';
import './Toggle.css';

const Toggle = ({ onToggle, initialState = false }) => {
  const [isToggled, setIsToggled] = useState(initialState);

  const handleToggle = () => {
    const newState = !isToggled;
    setIsToggled(newState);
    onToggle(newState);
  };

  return (
    <div className="toggle-container" onClick={handleToggle}>
      <div className={`slider ${isToggled ? 'active' : ''}`}></div>
    </div>
  );
};

export default Toggle;