import React from 'react'
import { HomeLanding } from './HomeComponents/HomeLanding'
import { Services } from './HomeComponents/Services'
import { About } from './HomeComponents/About'
import { ImportantInfo } from './HomeComponents/ImportantInfo'
import { Cta } from './HomeComponents/Cta'
import { Locations } from './HomeComponents/Locations'
import { Careers } from './HomeComponents/Careers'

export const HomeView = () => {
  return (
    <>
      <HomeLanding />
      <Services />
      <About />
      <ImportantInfo />
      <Cta />
      <Locations />
      <Careers />
    </>
  )
}
