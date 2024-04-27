import React from 'react'
import Image from 'next/image'
import SectionHeading from '../section-heading'
import products from '@/public/data/products.json'
import "./style.css"


export default function productLayout() {
  return (
    <section>
        <SectionHeading>Products</SectionHeading>
        <div className='grid grid-cols-5 gap-5'>
            {products.map((product) => <div key={product.id} className='card bg-gray-100 rounded-xl relative overflow-hidden cursor-pointer group'>
            <Image
                className='image rounded-2xl object-fit group-hover:scale-110 '
                src={`/images/${product.imageLink}`}
                width={280}
                height={280}
                alt={product.name}></Image>
                <h3 className='card-text absolute inset-0 flex justify-center items-center text-zinc-50 text-2xl opacity-0'>{product.name}</h3>
            </div>)}
        </div>
    </section>
  )
}
