import React from 'react'
import '@/public/leaflet.css';
import SectionHeading from '../section-heading'
import Map from "@/components/map"
function Contacts() {
  return (
    <section className='w-full flex flex-col items-center gap-0'>
    <SectionHeading>Contacts</SectionHeading>
    <div className='flex items-center justify-center gap-4 my-8'>
    <p><a href="tel:+905074213927">+90 222 222 22 22</a></p>
    <div className='flex items-center justify center bg-gray-800 h-10 w-[1px] hidden sm:block'></div>
    <address>500 Terry Francine Street<br></br>San Francisco, CA94158</address>
    </div>
    <Map className="w-full"></Map>
    </section>
  )
}

export default Contacts