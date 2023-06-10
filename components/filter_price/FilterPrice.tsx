import React from 'react';
import styles from '../products_filter/productsFilter.module.css';

type Props = {
    value: number
    changeHandleFromPrice: React.Dispatch<React.SetStateAction<number>>
    propartyName: string
}

export default function FilterPrice({ changeHandleFromPrice, propartyName, value }: Props) {
  return (
    <div className="flex-column mx-1">
      <p className="text-sm text-darkGray mb-1.5 text-start">
        {propartyName}
        :
      </p>
      <input
        type="number"
        onChange={
          (e) => changeHandleFromPrice((state) => (
            +e.target.value >= 0 ? +e.target.value : state
          ))
        }
        value={value}
        placeholder="100$"
        className={`inline-flex bg-lightGray w-full justify-between  text-darkGray ring-1 ring-inset ring-darkGray ${styles.general}`}
      />

    </div>
  );
}
