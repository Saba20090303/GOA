import React from 'react';
import './App.css';

const App = () => {
  // Simple Profile Card Data
  const users = [
    { name: 'John Doe', age: 28, occupation: 'Web Developer' },
    { name: 'Jane Smith', age: 34, occupation: 'Graphic Designer' },
    { name: 'Mike Johnson', age: 45, occupation: 'Project Manager' },
  ];

  // Product Showcase Data
  const products = [
    { name: 'Laptop', price: '$999', description: 'A high performance laptop for developers.' },
    { name: 'Smartphone', price: '$699', description: 'A fast and sleek smartphone with great features.' },
    { name: 'Headphones', price: '$199', description: 'Noise-cancelling headphones with great sound.' },
  ];

  return (
    <div className="App">
      <h1>User Profiles</h1>
      <ProfileList users={users} />
      <h1>Product Showcase</h1>
      <ProductList products={products} />
    </div>
  );
};

// ProfileList Component
const ProfileList = ({ users }) => {
  return (
    <div className="profile-list">
      {users.map((user, index) => (
        <ProfileCard
          key={index}
          name={user.name}
          age={user.age}
          occupation={user.occupation}
        />
      ))}
    </div>
  );
};

// ProfileCard Component
const ProfileCard = ({ name, age, occupation }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
};

// ProductList Component
const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

// ProductCard Component
const ProductCard = ({ name, price, description }) => {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default App;