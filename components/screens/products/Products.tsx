import Cards from '@/components/cards/Cards';
import ProductsFilter from '@/components/products_filter/ProductsFilter';
import React from 'react';
import getProducts from '@/services/getProducts';

export default async function ProductsComponent() {
  const data = await getProducts();
  return (
    <section className="container mx-auto mb-16">
      <div className="flex flex-col justify-items-center my-16 items-center text-center">
        <h1 className="text-5xl font-bold text-orange">Покупать слитки не сложно</h1>
        <p className="text-base text-darkGray mt-2.5">Поможем найти и пробрести золотые слитки</p>
        <ProductsFilter />
      </div>
      <Cards data={data} linkMore={false} />
    </section>
  );
}
