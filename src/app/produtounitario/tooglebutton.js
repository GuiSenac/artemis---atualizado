import React, { useState } from 'react';

const ToggleButton = ({ size }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelect = (size) => {
    setSelectedSize(selectedSize === size ? null : size);
  };

  return (
    <div className='sizeOptions'>
    <p>Escolha um tamanho:</p>
    <div className='sizeButtons'>
      {['38', '39', '40', '41'].map((size) => (
       <button
       key={size}
       className={`sizeButton ${selectedSize === size ? 'selectedSize' : ''}`}
       onClick={() => handleSizeSelect(size)}
     >
       {size}
     </button>
      ))}
    </div>
  </div>
  );
};

export default ToggleButton;
