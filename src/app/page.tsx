import Navbar from '@/components/client/Navbar'
import Hero from '@/components/server/Hero'
import Services from '@/components/server/Services'
import React from 'react'

export default function page() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
    </div>
  )
}
