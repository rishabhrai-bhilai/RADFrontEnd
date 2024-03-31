// EmojiPicker.js

import React from 'react';
import { Picker } from 'emoji-mart';

const EmojiPicker = ({ onSelect }) => {
  return (
    <div style={{ width: '200px', height: '200px' }}>
      <Picker onSelect={onSelect} />
    </div>
  );
};

export default EmojiPicker;
