import React, { Component } from 'react'
import  Landing from './Components/Landing/Landing'
import  Socialmedia from './Components/SocialMedia/SocialMedia'
import Medias from './Components/Medias/Medias'
import Brands from './Components/Brands/Brands'
import VideoSection from './Components/VideoSection/VideoSection'
import Footer from './Components/Footer/Footer'
class App extends Component {
  render() {
    return (
     <>
       <Landing/>
       <Socialmedia/>
       <Medias/>
       <Brands/>
       <VideoSection />
       <Footer/>
     </>
    )
  }
}

export default App;
