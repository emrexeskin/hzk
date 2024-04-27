import React from 'react'
import SectionHeading from '../section-heading'
import Image from 'next/image'
export default function About() {
  return (
    <section className='flex flex-col gap-4 items-center justify-center my-32'>
      <Image 
    src={"/images/elmadali.png"}
    width={400}
    height={250}
    className='absolute z-10 start-0 '
    ></Image>
    <Image 
    src={"/images/elmadali.png"}
    width={400}
    height={250}
    className='absolute scale-x-[-1] z-10 end-0'
    ></Image>
    
      <SectionHeading>About Us</SectionHeading>
      <p className='w-1/2 text-xl font-medium indent-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </section>
    
  )
}
