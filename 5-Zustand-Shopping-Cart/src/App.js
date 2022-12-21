import './App.css';
import Buttons from './components/Buttons';
import Carts from './components/Carts';
import Products from './components/Products';
import { useShoppingCartStore } from './hooks/useShoppingCart';

function App() {
  const { count, bears, products } = useShoppingCartStore((state) => state);
  return (
    // <div className='App'>
    //   <h2>Count: {count}</h2>
    //   <h2>Bears: {bears}</h2>
    //   <Buttons />
    //   {products &&
    //     products.map((p) => {
    //       return (
    //         <div key={p._id}>
    //           <strong>{p.name}</strong>
    //         </div>
    //       );
    //     })}
    // </div>
    <div className='container'>
      <Products />

      <hr />
      <Carts />
    </div>
  );
}

export default App;
