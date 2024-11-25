import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Card from './components/Card';
import List from './components/List';

function App() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <Header />
      <main>
        <Card title="Card Title" description="This is a card description." />
        <Button label="Click Me" onClick={() => alert('Button clicked!')} />
        <List items={items} />
      </main>
      <Footer />
    </div>
  );
}

export default App;