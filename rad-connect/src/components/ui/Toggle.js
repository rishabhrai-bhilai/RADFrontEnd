// import React, { useState } from 'react';
// import './Toggle.css';

// const Toggle = ({ onToggle, initialState = false }) => {
//   const [isToggled, setIsToggled] = useState(initialState);

//   const handleToggle = () => {
//     const newState = !isToggled;
//     setIsToggled(newState);
    
//     onToggle(newState);
//   };

//   return (
//     <div className="toggle-container" onClick={handleToggle}>
//       <div className={`slider ${isToggled ? 'active' : ''}`}></div>
//     </div>
//   );
// };

// export default Toggle;


import React, { useState, useEffect } from 'react';
import './Toggle.css';

const Toggle = ({ onToggle, isToggled }) => {
  const [toggleState, setToggleState] = useState(isToggled);

  useEffect(() => {
    setToggleState(isToggled);
  }, [isToggled]);

  const handleToggle = () => {
    const newState = !toggleState;
    setToggleState(newState);
    onToggle(newState);
  };

  return (
    <div className="toggle-container" onClick={handleToggle}>
      <div className={`slider ${toggleState ? 'active' : ''}`}></div>
    </div>
  );
};

export default Toggle;