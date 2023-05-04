import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../Context/CartContext';
import style from './Cart.module.css';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total, } = useContext(CartContext);

  useEffect(() => {
    // Actualiza el estado del componente cuando cambie el contexto
  }, [cart, totalQuantity, total]);

  if(totalQuantity === 0) {
    return (
      <div className={style.contenedor}>
        <h3 className={style.h3}>No hay productos en el carrito</h3>
        <Link to='/' className={style.link}>Volver al inicio</Link>
      </div>
    );
  }

  return (
   <>
    { cart.map(p => <CartItem key={p.id} id={p.id} name={p.name} quantity={p.quantity} price={p.price} />)}
    <h3>Total: ${total}</h3>
    <button onClick={()=>clearCart()}className={style.Button}>Vaciar carrito</button>
    <Link to='/checkout' className={style.Button}>Finalizar compra</Link>
   </>
  );
}

export default Cart;




