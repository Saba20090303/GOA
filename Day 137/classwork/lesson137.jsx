import React, { useState } from 'react';
import './App.css';
const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !releaseDate || !price) {
      alert('გთხოვთ, შეიყვანოთ ყველა აუცილებელი ინფორმაცია!');
      return;
    }
    const newProduct = { name, releaseDate, price };
    addProduct(newProduct);
    setName('');
    setReleaseDate('');
    setPrice('');
  };

  return (
    <div className="product-form">
      <h2>ახალი პროდუქტის დამატება</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">პროდუქტის სახელი</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="შეიყვანეთ პროდუქტის სახელი"
          />
        </div>
        <div className="input-group">
          <label htmlFor="releaseDate">გამოშვების ვადა</label>
          <input
            type="date"
            id="releaseDate"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="price">ფასი</label>

          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="შეიყვანეთ ფასი"
          />
        </div>
        <button type="submit">დამატება</button>
      </form>
    </div>
  );
};

const Product = ({ product }) => (
  <div className="product">
    <h3>{product.name}</h3>
    <p>გამოშვების ვადა: {product.releaseDate}</p>
    <p>ფასი: {product.price} ₾</p>
  </div>
);
function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="App">
      <header>
        <h1>Online მაღაზია</h1>
      </header>
      <ProductForm addProduct={addProduct} />
      <div className="product-list">
        {products.length === 0 ? (
          <p>პროდუქტები ჯერ არ არის დამატებული</p>
        ) : (
          products.map((product, index) => <Product key={index} product={product} />)
        )}
      </div>
    </div>
  );
}

export default App;