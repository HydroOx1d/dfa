'use client';

import React from 'react';
import Image from 'next/image';
import golden from '@/assets/golden.png';
import { jetBrainsMono } from '@/utils/fonts';
import minus from '@/assets/minus.svg';
import plus from '@/assets/plus.svg';
import wishWhite from '@/assets/wishWhite.svg';
import plusWhite from '@/assets/plusWhite.svg';

function Product() {
  const [goldCount, setGoldCount] = React.useState(0);

  const onPlus = () => {
    setGoldCount((prev) => prev + 1);
  };
  const onMinus = () => {
    setGoldCount((prev) => prev - 1);
  };

  return (
    <section className="product py-16">
      <div className="container mx-auto">
        <div className="flex">
          <Image
            src={golden}
            width={655}
            height={555}
            alt="gold"
            className="basis-2/4 mr-2"
          />
          <div className="basis-2/4 p-5 bg-lightGray flex flex-col">
            <div className="flex justify-between mb-10">
              <h3 className="text-3xl max-w-sm text-darkGray">
                Аффинированный мерный слиток из золота
              </h3>
              <span
                className={`text-3xl text-orange italic ${jetBrainsMono.className}`}
              >
                10000$
              </span>
            </div>

            <div className="block mb-10">
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

            <div className="block">
              <div className="text-sm mb-1">Количество слитков</div>
              <div className="inline-flex items-center rounded-full border-2 py-4 px-6">
                <span
                  className={`mr-6 cursor-pointer ${
                    goldCount <= 0 && 'opacity-50 pointer-events-none'
                  }`}
                >
                  <Image
                    src={minus}
                    width={24}
                    height={24}
                    alt="negative"
                    onClick={onMinus}
                  />
                </span>
                <span className={`text-sm ${jetBrainsMono.className}`}>
                  {goldCount}
                </span>
                <span className="ml-6 cursor-pointer">
                  <Image
                    src={plus}
                    width={24}
                    height={24}
                    alt="positive"
                    onClick={onPlus}
                  />
                </span>
              </div>
            </div>

            <div className="flex mt-auto">
              <div className="rounded-full bg-orange text-white mr-2 w-full flex justify-center items-center">
                Начать покупку
              </div>
              <div className="rounded-full p-5 bg-black2 mr-2">
                <Image src={wishWhite} width={20} height={20} alt="wish" />
              </div>
              <div className="rounded-full p-5 bg-black2">
                <Image src={plusWhite} width={20} height={20} alt="add" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
