import React from 'react';

const ButtonComponent = ({ openModal }) => {
  return (
    // <div>
    //   <button onClick={openModal}>Open Modal</button>
    // </div>

    <i onClick={openModal} class="bx bxs-show"></i>
  );
};

export default ButtonComponent;
