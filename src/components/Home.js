import React from 'react'
import AboutMe from './AboutMe';
import Blogs from './BlogsSection';
import Contact from './ContactSection';
import DividerLine from './DividerLine';
import HomeBanner from './HomeBannerSection';
import Projects from './ProjectsSection';

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <AboutMe />
      <Projects />
      <Blogs/>
      <Contact />
    </div>
  )
}

export default Home;