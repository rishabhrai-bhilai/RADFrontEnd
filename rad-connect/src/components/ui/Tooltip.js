import React, { useState } from 'react';
import './Tooltip.css'; // Import CSS for styling

const Tooltip = ({ content, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Event handlers
  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && <div className="tooltip">{content}</div>}
    </div>
  );
};

export default Tooltip;
