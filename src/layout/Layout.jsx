import React, { useRef } from 'react'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router'

const Layout = () => {
    
  const topRef = useRef(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
        {/* <Header topRef={topRef} />  ref={topRef} */} 
        <Outlet />
        <Footer scrollToTop={scrollToTop} />
    </div>
  )
}

export default Layout