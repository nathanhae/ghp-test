import React, { useState } from 'react'

const StateComponent = ({ borderColor }) => {
  const [ borderOn, setBorderState ] = useState(false);
  const toggleBorderState = () => setBorderState(!borderOn);

  const styles = borderOn ? {
    border: `2px solid ${borderColor}`,
  } : {};

  return (
    <button onClick={toggleBorderState} style={styles}>
      Toggle Border
    </button>
  );
};

export default StateComponent;
