import './App.css';

import Navigator from "./Components/Navigation/Navigator.jsx";
import Router from "./Components/Navigation/Router.jsx";

import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import ProductTable from "./Components/ProductTable/ProductTable.jsx";

import { useState } from 'react';

function App() {
  // Estado para manejar el término de búsqueda y el filtro de productos en stock
  const [searchTerm, setSearchTerm] = useState('');
  const [showInStock, setShowInStock] = useState(false);

  // Datos de ejemplo
  const products = [
    { category: 'Frutas', price: '$1', stocked: true, name: 'Manzana' },
    { category: 'Frutas', price: '$2', stocked: false, name: 'Cereza' },
    { category: 'Verduras', price: '$3', stocked: true, name: 'Espinaca' },
    { category: 'Verduras', price: '$4', stocked: false, name: 'Zanahoria' },
  ];

  return (
    <>
      {/* Navegación y enrutador */}
      <Navigator />
      <Router />

      {/* Barra de búsqueda */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        showInStock={showInStock}
        setShowInStock={setShowInStock}
      />

      {/* Tabla de productos */}
      <ProductTable
        products={products}
        searchTerm={searchTerm}
        showInStock={showInStock}
      />
    </>
  );
}

export default App;
