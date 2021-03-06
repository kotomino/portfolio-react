import React from 'react'
import AboutMe from './AboutMe';
import Blogs from './BlogsSection';
import Contact from './ContactSection';
import HomeBanner from './HomeBannerSection';
import Projects from './ProjectsSection';

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <AboutMe />
      <Blogs/>
      <Projects />
      <Contact />
    </div>
  )
}

export default Home;