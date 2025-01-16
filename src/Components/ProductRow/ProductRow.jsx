import React from 'react';
import './ProductRow.css';

const ProductRow = ({ product }) => {
  const nameStyle = product.stocked ? {} : { color: 'orange' };

  return (
    <tr>
      <td style={nameStyle}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
