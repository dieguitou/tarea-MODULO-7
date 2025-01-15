import React from 'react';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow';
import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css';

const ProductTable = ({ products, searchTerm, showInStock }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      (showInStock && !product.stocked) ||
      !product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category} />
      );
    }

    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
