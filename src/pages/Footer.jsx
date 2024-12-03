import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './styes/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <div className='footer__container'>
                <h4 className='footer__title'>© Academlo 2024</h4>
                <section className='footer__links'>
                <div> 
                    <Link to='/'><InstagramIcon/></Link>
                </div>
                <div>
                    <Link to='/'><LinkedInIcon/></Link>
                </div>
                <div>
                    <Link to='/'><YouTubeIcon/></Link>
                </div>
                </section>
            </div>
        </footer>
    </div>
  )
}

export default Footer