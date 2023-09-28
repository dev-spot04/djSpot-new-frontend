/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../../assets/img/images/thumbnails/cs-logo.png'
import fbicon from '../../assets/img/images/icons/fb-icn.png'
import linkedin from '../../assets/img/images/icons/linkedin-icn.png'
import twitter from '../../assets/img/images/icons/twitter-icn.png'
import insta from '../../assets/img/images/icons/insta-icn.png'
import youtube from '../../assets/img/images/icons/youtube-icn.png'


const Footer = () => {
  return (
    <footer class="cs-footer">
    <div class="container">
        <div class="inner-footer-content">
            <a href="#" class="footer-logo">
                <img src={logo} alt="logo" />
            </a>
            <div class="footer-social-info">
                <ul class="footer-social-list">
                    <li>
                        <a href="#">
                            <img src={linkedin} alt="linkedin-icn" />
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src={twitter} alt="twitter-icn" />
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src={insta} alt="insta-icn" />
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src={fbicon} alt="fb-icn" />
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <img src={youtube} alt="youtube-icn" />
                        </a>
                    </li>
                </ul>
                <p class="footer-copyright">© 2023 AMP Spot | All rights reserved | Designed By Md Rakib Shekh
                </p>

            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer