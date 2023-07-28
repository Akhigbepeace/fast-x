import React from 'react'
import Navbar from '../component/layouts/Navbar'
import { Box } from '@chakra-ui/react'
import Description from '../component/molecules/Description'
import HeroSection from '../component/molecules/HeroSection'
import Showcase from '../component/molecules/Showcase'
import Rider from '../component/molecules/Rider'
import Map from '../component/molecules/Map'
import Footer from '../component/molecules/Footer'

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Description />
      <HeroSection />
      <Showcase />
      <Rider />
      <Map />
      <Footer />
    </Box>
  )
}

export default Home
