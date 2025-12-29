

import React from 'react'
import HeroSection from '../../Components/HeroSection';
import WatchesCategory from '@/app/Components/WatchesCategory';
import FeaturedProductsSlider from '@/app/Components/Fashe';
import Blog from '@/app/Components/Blog';
import BlogPage from '@/app/Components/Collection';

const page = () => {
  return (
    <div>
     <HeroSection/>
     <WatchesCategory/>
     <FeaturedProductsSlider/>
     <BlogPage/>
    </div>
  )
}

export default page
