import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom"
import style from './ItemDetail.module.css';    

import { CartContext } from "../Context/CartContext";


const ItemDetail = ({ id,name,img,category,description,price,stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        console.log(quantity);
const item = { id,name,img,price,quantity 
};
        addItem(item, quantity);
    };

    return (
        <div className={style.ItemDetail}>
            <div className={style.cartItem}>
                <header className={style.Header}>
                    <h2 className={style.headeritem}>
                        {name}
                    </h2>
                </header>
                <picture>
                    <img src={img} alt={name}className={style.Itemimg} />
                </picture>
                <section>
                    <p className={style.info}>
                        {description}
                    </p>
                    <p className={style.info}>
                    category: {category}
                    </p>
                    <p className={style.info}>
                    price: {price}
                    </p>
                </section>
                <footer className={style.Itemfooter}>
                {quantityAdded > 0 ? (
                    <Link to="/cart" className={style.btnprimary}>
                        Terminar mi compra
                    </Link>
                ) : (
                    <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
                )
                    }
                
                
                </footer>
            </div>
        </div>
    );
};

export default ItemDetail;



