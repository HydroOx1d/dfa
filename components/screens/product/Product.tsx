'use client';

import React from 'react';
import Image from 'next/image';
import golden from '@/assets/golden.png';
import { jetBrainsMono } from '@/utils/fonts';
import { MinusIcon, PlusIcon, HeartIcon } from '@heroicons/react/24/outline';
import Cards from '@/components/cards/Cards';
import cardsData from '@/api/products';

function Product() {
  const [goldCount, setGoldCount] = React.useState(0);

  const onPlus = () => {
    setGoldCount((prev) => prev + 1);
  };
  const onMinus = () => {
    setGoldCount((prev) => prev - 1);
  };

  const data = cardsData.slice(0, 6);

  return (
    <section className="product py-16">
      <div className="container mx-auto px-3">
        <div className="flex mb-14 lg:flex-row flex-col">
          <Image
            src={golden}
            width={655}
            height={555}
            alt="gold"
            className="lg:basis-2/4 basis-full w-full lg:mr-2 lg:mb-0 mb-5"
          />
          <div className="lg:basis-2/4 basis-full p-5 bg-lightGray flex flex-col">
            <div className="flex justify-between xl:mb-10 mb-6">
              <h3 className="xl:text-3xl sm:text-2xl text-xl xl:max-w-sm max-w-xs text-darkGray mr-2">
                Аффинированный мерный слиток из золота
              </h3>
              <span
                className={`xl:text-3xl sm:text-2xl text-xl text-orange italic ${jetBrainsMono.className}`}
              >
                10000$
              </span>
            </div>

            <div className="block xl:mb-10 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm">Масса, г</span>
                <span className={`${jetBrainsMono.className} text-base`}>
                  30
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Ширина, мм</span>
                <span className={`${jetBrainsMono.className} text-base`}>
                  30
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Длинна, мм</span>
                <span className={`${jetBrainsMono.className} text-base`}>
                  30
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Производитель</span>
                <span className={`${jetBrainsMono.className} text-base`}>
                  ОсОО &#34;DFA&#34;
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Проба</span>
                <span className={`${jetBrainsMono.className} text-base`}>
                  750
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Карат</span>
                <span className={`${jetBrainsMono.className} text-base`}>
                  18
                </span>
              </div>
            </div>

            <div className="block mb-2">
              <div className="text-sm mb-1">Количество слитков</div>
              <div className="inline-flex items-center rounded-full border-2 xl:py-4 xl:px-6 py-2 px-4">
                <span
                  className={`mr-6 cursor-pointer ${
                    goldCount <= 0 && 'opacity-50 pointer-events-none'
                  }`}
                >
                  <MinusIcon className="w-6" onClick={onMinus} />
                </span>
                <span className={`text-sm ${jetBrainsMono.className}`}>
                  {goldCount}
                </span>
                <span className="ml-6 cursor-pointer">
                  <PlusIcon className="w-6" onClick={onPlus} />
                </span>
              </div>
            </div>

            <div className="flex mt-auto">
              <button className="rounded-full bg-orange text-white mr-2 w-full flex justify-center items-center">
                Начать покупку
              </button>
              <button className="rounded-full xl:p-5 p-3 bg-black2 mr-2">
                <HeartIcon className="w-5 text-white" />
              </button>
              <button className="rounded-full xl:p-5 p-3 bg-black2">
                <PlusIcon className="w-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        <Cards data={data} linkMore={false} />
      </div>
    </section>
  );
}

export default Product;
