import React from 'react'
import AboutMe from './AboutMe';
import Contact from './Contact';
import HomeBanner from './HomeBanner';
import Projects from './Projects';


const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home;