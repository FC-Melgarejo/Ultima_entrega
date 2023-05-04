import firebase from 'firebase/app';
import 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import CheckoutForm from './Checkoutform';

const Checkout = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [outOfStock, setOutOfStock] = useState([]);

  const handleSubmit = async ({ name, email, phone }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: { name, email, phone },
        items: cart,
        total: total,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
      };

      const batch = firebase.firestore().batch();

      const outOfStock = [];

      objOrder.items.forEach((prod) => {
        const docRef = firebase.firestore().doc(`/products/${prod.id}`);
        batch.update(docRef, { stock: prod.stock - prod.quantity });

        if (prod.stock < prod.quantity) {
          outOfStock.push({ ...prod });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const docRef = await firebase.firestore().collection('orders').add(objOrder);
        setOrderId(docRef.id);
        clearCart();
      } else {
        setOutOfStock(outOfStock);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (orderId) {
    return <h1>Se está generando su orden: {orderId}</h1>;
  }

  if (outOfStock.length > 0) {
    return (
      <div>
        <h1>Algunos productos no están disponibles en stock:</h1>
        <ul>
          {outOfStock}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Checkout;












