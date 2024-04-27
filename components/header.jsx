import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between px-8 py-4 rounded-md bg-[#111111] bg-opacity-40'>
        <Image 
        src={"/images/hzklogo.png"}
        width={50}
        height={50}
        alt='logo'
        ></Image>
        <div className='flex items-center justify-center gap-8 text-white text-lg mr-12'>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Gallery</Link>
            <Link href={"#"}>Contact</Link>
        </div>
    </header>
  )
}

export default Header