
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

import { CartProvider } from './components/Context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <CartProvider>
       <Header/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por category'}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart/' element={<Cart/>}/>
          <Route path='/checkout/' element={<Checkout/>}/>
          <Route path='*' element={<h1>404 Not Found</h1>}/>
        </Routes>
       </CartProvider>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
