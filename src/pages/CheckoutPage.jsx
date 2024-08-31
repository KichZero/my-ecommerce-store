import React, { useState } from 'react';
import CheckoutForm from '../components/CheckoutForm';

const CheckoutPage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Логика оформления заказа
    const orderDetails = {
      name,
      address,
      email,
      phone,
      paymentMethod,
    };

    // Отправка данных заказа и платежа на сервер
    // Пример запроса на сервер (зависит от вашего бекенда)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderDetails, paymentMethod }), // Замените на реальный объект
      });

      const result = await response.json();
      if (result.success) {
        alert('Заказ оформлен успешно!');
      } else {
        alert('Ошибка при оформлении заказа.');
      }
    } catch (error) {
      console.error('Ошибка при оформлении заказа:', error);
    }
  };

  return (
    <div>
      <h1>Оформление заказа</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Адрес:</label>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Телефон:</label>
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Метод оплаты:</label>
          <select 
            value={paymentMethod} 
            onChange={(e) => setPaymentMethod(e.target.value)} 
            required
          >
            <option value="credit-card">Кредитная карта</option>
            <option value="paypal">PayPal</option>
            <option value="cash-on-delivery">Наличные при доставке</option>
          </select>
        </div>
        <button type="submit">Подтвердить заказ</button>
      </form>
      <CheckoutForm /> {/* Включите форму оплаты сюда */}
    </div>
  );
};

export default CheckoutPage;