import React from 'react'
import Image from 'next/image'
import './style.css'

export default function Page({params}) {
  return (
    <section>
        <div className='relative'>
          <Image
          src='/images/appleContainer.png'
          className='mx-auto mt-10 rounded-2xl'
          width={1040}
          height={740}
          ></Image>
          <div className='card-text-group absolute inset-0 flex justify-center items-center flex-col text-center text-white'>
            <h3 className='text-9xl font-bold'>APPLE</h3>
            <p className='text-4xl'>fresh and juicy</p>
          </div>
        </div>
    </section>
  )
}
