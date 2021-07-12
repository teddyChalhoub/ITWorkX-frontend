import React ,{useState}from 'react'
import {FaFacebook,FaInstagram,FaTwitter,FaGooglePlusG} from 'react-icons/fa';
import './SecondaryFooter.css'

export default function secondaryFooter() {
     return (

<div className="footer-content">
            <h3>Get connected with us on socia media !</h3>
            <ul className="socials">
                <li><a className="fa-icon-color" href="https://www.facebook.com/"><FaFacebook/></a></li>
                <li><a className="fa-icon-color" href="https://www.instagram.com/"><FaInstagram/></a></li>
                <li><a className="fa-icon-color" href="https://www.twitter.com/"><FaTwitter/></a></li>
                <li><a className="fa-icon-color" href="https://www.google.com/gmail/"><FaGooglePlusG/><a></a></a></li>
            </ul>
            </div>    
     )
}