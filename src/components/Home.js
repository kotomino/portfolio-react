import React from 'react'
import AboutMe from './AboutMe';
import Blogs from './Blogs';
import Contact from './Contact';
import DividerLine from './DividerLine';
import HomeBanner from './HomeBanner';
import Projects from './Projects';

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <AboutMe />
        <DividerLine/>
      <Projects />
        <DividerLine/>
      <Blogs/>
        <DividerLine/>
      <Contact />
    </div>
  )
}

export default Home;