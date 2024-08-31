// Эта страница будет показывать детали конкретного товара.
import React from 'react';

const ProductDetailPage = ({ match }) => {
  const { productId } = match.params;

  // Заглушка для информации о товаре
  const product = {
    id: productId,
    name: `Товар ${productId}`,
    price: productId * 100,
    description: 'Описание товара...',
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Цена: {product.price} руб.</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetailPage;