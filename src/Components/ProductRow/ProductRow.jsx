import React from 'react';
import './ProductRow.css';

const ProductRow = ({ product }) => {
  const nameStyle = product.stocked ? {} : { color: 'red' };

  return (
    <tr>
      <td style={nameStyle}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
