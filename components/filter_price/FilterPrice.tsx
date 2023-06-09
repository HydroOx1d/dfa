import React from 'react'
import styles from '../products_filter/productFilter.module.css'

type Props = {
    value: number 
    changeHandleFromPrice(price: number): void
    propartyName: string
}

export default function FilterPrice({changeHandleFromPrice, propartyName, value}: Props) {
  return (
    <div className='flex-column mx-1'>
        <p className='text-sm text-darkGray mb-1.5'>{propartyName}:</p>
        <input 
            type="number" 
            onChange={(e) => changeHandleFromPrice(+e.target.value)} 
            value={value} 
            placeholder='100$'
            className={`inline-flex bg-lightGray w-full justify-between  text-darkGray ring-1 ring-inset ring-darkGray ${styles.general}`}    
        />

    </div>
  )
}
