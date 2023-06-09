import React from 'react'
import Card from '../card/Card'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'


const cardsData = [
    {
        name: 'Аффинированный мерный слиток из золота',
        price: '10534$',
        carat: 18, 
        sampe: 750,
        mass: 30,
        width: 37,
        height: 22, 
    },
    {
        name: 'Аффинированный мерный слиток из золота',
        price: '10534$',
        carat: 18, 
        sampe: 750,
        mass: 30,
        width: 37,
        height: 22, 
    },
    {
        name: 'Аффинированный мерный слиток из золота',
        price: '10534$',
        carat: 18, 
        sampe: 750,
        mass: 30,
        width: 37,
        height: 22, 
    },
    {
        name: 'Аффинированный мерный слиток из золота',
        price: '10534$',
        carat: 18, 
        sampe: 750,
        mass: 30,
        width: 37,
        height: 22, 
    },
    {
        name: 'Аффинированный мерный слиток из золота',
        price: '10534$',
        carat: 18, 
        sampe: 750,
        mass: 30,
        width: 37,
        height: 22, 
    },
]  

export default function Cards() {
  return (
    <div className="flex items-center flex-col sm:grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {
            cardsData.map((el, index) => (
                <Card key={index} data={el}/>
            ))
        }
        <article className="p-2.5 bg-orange w-full h-full sm:max-w-md rounded-md flex justify-center items-center">
            <a href='#' className='flex items-center'>
                <h3 className="text-lg font-semibold text-white mr-3">
                    Больше золота
                </h3>
                
                <ArrowUpRightIcon className='w-7 text-white min-h-[270px]'/>
            </a>
        </article>
    </div>
  )
}
