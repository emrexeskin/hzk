import Image from 'next/image'
import React from 'react'

export default function Entry() {
  return (
 <section className='flex flex-col items-center justify-center gap-2 mb-24'>
    <Image 
    src={"/images/kirazdali.png"}
    width={500}
    height={800}
    className='absolute z-10 start-0 '
    ></Image>
    <Image 
    src={"/images/kirazdali.png"}
    width={500}
    height={800}
    className='absolute scale-[-1]  z-10 end-0'
    ></Image>
    
    
    <p className='text-2xl  text-[#111111] mb-2'>- Since 1998 -</p>
    <h1 className='border-t-4 border-b-4 border-black text-7xl font-black py-2 px-5 mb-12 text-[#111111]'>HZK GROUP FARMING</h1>
    <Image 
        src={"/images/hzklogo.png"}
        width={200}
        height={200}
        alt='logo'
        ></Image>
 </section>
  )
}
