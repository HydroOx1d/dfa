import Cards from '@/components/cards/Cards';
import ProductsFilter from '@/components/products_filter/ProductsFilter';
import React from 'react';

export default function HomeComponent() {
  return (
    <div className="container mx-auto my-24">
      <div className="flex flex-col justify-items-center items-center mb-72 text-center">
        <h1 className="text-5xl font-bold text-orange">Покупать слитки не сложно</h1>
        <p className="text-base text-darkGray mt-2.5">Поможем найти и пробрести золотые слитки</p>
        <ProductsFilter />
      </div>
      <Cards />
    </div>
  );
}
