import { doc } from "firebase/firestore";

export const DataAdaptedFromFirestore =(doc)=>{
    console.log('ingresar a createdataAdaptedFromFirestore');
};

const fields = doc.data();
console.log('la data ,lista para ser adaptada a mi app: ',
    fields );
const dataAdapted ={
    id: doc.id,
    name: fields.name,
    category: fields.category,
    price: fields.price,
    stock: fields.stock,
    Image: fields.Image,
    priority: fields.priority,
};
return dataAdapted;