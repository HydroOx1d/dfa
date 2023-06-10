'use client';

import React from 'react';
import FilterDropdown from '../filter_dropdown/FilterDropdown';
import FilterPrice from '../filter_price/FilterPrice';
import styles from './productsFilter.module.css';

const dropDown = {
  weights: [
    { value: '1 г' },
    { value: '10 г' },
    { value: '20 г' },
    { value: '30 г' },
    { value: '50 г' },
    { value: '100 г' },
  ],
  carat: [
    { value: '750 / 18' },
    { value: '750 / 18' },
    { value: '750 / 18' },
    { value: '750 / 18' },
    { value: '750 / 18' },
    { value: '750 / 18' },
  ],
};

export default function ProductsFilter() {
  const [weight, setWeight] = React.useState<string>(dropDown.weights[0].value);
  const [carat, setCarat] = React.useState<string>(dropDown.carat[0].value);
  const [priceFrom, setPriceFrom] = React.useState<number>(0);
  const [priceTo, setriceTo] = React.useState<number>(0);

  function submitHandler() {
    // const searchData = {
    //   weight, carat, priceFrom, priceTo,
    // };

    // console.log(searchData);
  }

  return (
    <div className="mt-16 flex items-end">
      <FilterDropdown propartyName="Вес" options={dropDown.weights} clickHandleOption={setWeight} value={weight} />
      <FilterDropdown propartyName="Проба / Карат" options={dropDown.carat} clickHandleOption={setCarat} value={carat} />
      <FilterPrice changeHandleFromPrice={setPriceFrom} value={priceFrom} propartyName="Цена от" />
      <FilterPrice changeHandleFromPrice={setriceTo} value={priceTo} propartyName="Цена до" />
      <button
        onClick={submitHandler}
        className={`bg-orange text-white ${styles.general}`}
      >
        Найти золото
      </button>
    </div>
  );
}
