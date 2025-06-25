import React from 'react'
import Quote from './Quote'  
import About from './About'

const Home = () => {
  return (
    <div>
  <div className="w-[90vw] max-w-screen-lg mx-auto mt-[3vh] h-[75vh]">
  <img 
      src="/Shloka-Setu/images/front.png" 
    alt="Gita Ka Saar" 
    className="w-full h-full object-cover rounded-lg" 
  />
</div>
     <Quote/>
     <hr className="p-1 bg-gray-600"/>
     <About/>

    </div>
  )
}

export default Home
