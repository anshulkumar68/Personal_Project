import { useState } from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import './App.css'
import ChangePage from './components/ChangePage';

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <>
      <Navbar/>
      <Products products={products} setProducts={setProducts} page={page} setPage={setPage}/>
      <ChangePage products={products} page={page} handlePageChange={handlePageChange}/>
    </>
  )
}

export default App

