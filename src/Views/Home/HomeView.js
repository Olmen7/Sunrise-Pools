import React from 'react'
import { HomeLanding } from './HomeComponents/HomeLanding'
import { Services } from './HomeComponents/Services'
import { About } from './HomeComponents/About'

export const HomeView = () => {
  return (
    <>
      <HomeLanding />
      <Services />
      <About />
    </>
  )
}
