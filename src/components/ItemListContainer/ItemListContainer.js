import { getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../Config/Firebase';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { query, collection, where } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
 
  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('categoryId', '==', categoryId))
      : collection(db, 'products');

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{categoryId}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

