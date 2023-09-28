/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Header from '../../components/header'
import '../../assets/css/bootstrap.css'
import '../../assets/css/button.css'
import '../../assets/css/header.css'
import '../../assets/css/media.css'
import '../../assets/css/slick.css'
import '../../assets/css/style.css'
import '../../assets/css/utilities.css'
import '../../assets/css/home.css'
import Footer from '../../components/footer'
import HomeComp from './HomeComp'

const Home = () => {
  return (
    <div className="cs-theme-wrapper">
    <Header />
    <HomeComp/>
    <Footer/>
    </div>
  )
}

export default Home