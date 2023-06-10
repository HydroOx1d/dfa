import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import { HeartIcon, PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type Props = {
  data: {
    id: number;
    name: string
    price: string;
    carat: number;
    sampe: number;
    mass: number;
    width: number;
    height: number;
  }
}

export default function Card({ data }: Props) {
  return (
    <article className="p-2.5 bg-lightGray w-full sm:max-w-md rounded-md">
      <Link href={`/products/${data.id}`}>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-darkGray w-56">
            {data.name}
          </h3>

          <ArrowUpRightIcon className="w-7" />
        </div>
      </Link>

      <div className="flex justify-between items-start mt-5">
        <div className="flex flex-col justify-start flex-1">
          <span className="text-darkGray text-sm">Цена за слиток</span>
          <span className="text-orange text-base font-bold">{data.price}</span>
        </div>
        <div className="flex flex-col justify-start flex-1 ml-1.5">
          <span className="text-darkGray text-sm">Ширина , мм</span>
          <span className="text-darkGray text-base font-normal">{data.height}</span>
        </div>
        <div className="flex flex-col justify-start flex-1 ml-1.5">
          <span className="text-darkGray text-sm">Проба</span>
          <span className="text-darkGray text-base font-normal">{data.sampe}</span>
        </div>
      </div>
      <div className="flex justify-between items-start mt-5">
        <div className="flex flex-col justify-start flex-1">
          <span className="text-darkGray text-sm">Масса, г</span>
          <span className="text-darkGray text-base font-bold">{data.mass}</span>
        </div>
        <div className="flex flex-col justify-start flex-1 ml-2.5">
          <span className="text-darkGray text-sm">Длина, мм</span>
          <span className="text-darkGray text-base font-normal">{data.height}</span>
        </div>
        <div className="flex flex-col justify-start flex-1 ml-2.5">
          <span className="text-darkGray text-sm">Карат</span>
          <span className="text-darkGray text-base font-normal">{data.carat}</span>
        </div>
      </div>

      <div className="flex items-center mt-7">
        <button
          className="bg-white p-2.5 w-full flex justify-center"
        >
          Купить сейчас
        </button>
        <button
          className="w-12 h-9 bg-black2 flex justify-center items-center rounded-full mx-2.5"
        >
          <HeartIcon className="w-5 text-white" />
        </button>
        <button
          className="w-12 h-9 bg-black2 flex justify-center items-center rounded-full"
        >
          <PlusIcon className="w-5  text-white" />
        </button>
      </div>
    </article>
  );
}
