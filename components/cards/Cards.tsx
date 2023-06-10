import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Card from '../card/Card';

const cardsData = [
  {
    id: 1,
    name: 'Аффинированный мерный слиток из золота',
    price: '10534$',
    carat: 18,
    sampe: 750,
    mass: 30,
    width: 37,
    height: 22,
  },
  {
    id: 2,
    name: 'Аффинированный мерный слиток из золота',
    price: '10534$',
    carat: 18,
    sampe: 750,
    mass: 30,
    width: 37,
    height: 22,
  },
  {
    id: 3,
    name: 'Аффинированный мерный слиток из золота',
    price: '10534$',
    carat: 18,
    sampe: 750,
    mass: 30,
    width: 37,
    height: 22,
  },
  {
    id: 4,
    name: 'Аффинированный мерный слиток из золота',
    price: '10534$',
    carat: 18,
    sampe: 750,
    mass: 30,
    width: 37,
    height: 22,
  },
  {
    id: 5,
    name: 'Аффинированный мерный слиток из золота',
    price: '10534$',
    carat: 18,
    sampe: 750,
    mass: 30,
    width: 37,
    height: 22,
  },
];

export default function Cards() {
  return (
    <div className="flex items-center flex-col sm:grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
      {
            cardsData.map((el) => (
              <Card key={el.id} data={el} />
            ))
        }
      <article className="p-2.5 bg-orange w-full h-full sm:max-w-md rounded-md flex justify-center items-center">
        <Link href="/products" className="flex items-center">
          <h3 className="text-lg font-semibold text-white mr-3">
            Больше золота
          </h3>

          <ArrowUpRightIcon className="w-7 text-white min-h-[270px]" />
        </Link>
      </article>
    </div>
  );
}
