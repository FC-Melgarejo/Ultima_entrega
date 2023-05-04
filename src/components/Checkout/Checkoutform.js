import { useState } from 'react';
import { useForm } from 'react-hook-form';


const CheckoutForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phone });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" value={name} onChange={handleName} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={handleEmail} />
      </div>
      <div>
        <label htmlFor="phone">Teléfono</label>
        <input type="text" id="phone" value={phone} onChange={handlePhone} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CheckoutForm;
