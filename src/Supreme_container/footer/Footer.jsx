import React from 'react'
import './footer.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
    return (
        <>
        <div className='text-white'>
                <div className="text-center text-lg-start bg-dark text-muted">
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        <div className="me-5 d-none d-lg-block">
                            <span>Join Our Social Community:</span>
                        </div>
                        <div>
                            <a href="#" className="me-4 link-secondary">
                            <FacebookIcon style={{color:"white"}}/>
                            </a>
                            <a href="#" className="me-4 link-secondary">
                            <InstagramIcon style={{color:"white"}}/>
                            </a>
                            <a href="#" className="me-4 link-secondary">
                               <LinkedInIcon style={{color:"white"}}/> 
                            </a>
                            <a href="#" className="me-4 link-secondary">
                                <YouTubeIcon style={{color:"white"}}/>
                            </a>                
                            <a href="#" className="me-4 link-secondary">
                                <TwitterIcon color='white' style={{color:"white"}}/>
                            </a>                
                        </div>
                    </section>
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4 text-warning">
                                        Foresite
                                    </h6>
                                    <p>
                                    We provide quality services that are designed for business owners who need affordable, reliable, and quality support.
                                    </p>
                                </div>

                                <div className="useful-links col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4 text-warning">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href="#" className="text-reset">About Us</a>
                                    </p>
                                    <p>
                                        <a href="#" className="text-reset">Our Projects</a>
                                    </p>
                                    <p>
                                        <a href="#" className="text-reset">Our services</a>
                                    </p>
                                    <p>
                                        <a href="#" className="text-reset">Contact Us</a>
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4 text-warning">Contact</h6>
                                    <p><LocationOnIcon/> Mir Complex-Ist floor</p>
                                            <p>Nagbal Ganderbal, 190006</p>
                                    <p><EmailIcon/>foresite@gmail.com</p>
                                    <p><CallIcon/>+ 91 7006543077</p>
                                    <p><CallIcon/>+ 91 7006791254</p>
                                    <p><CallIcon/>+ 91 6006137008</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className=" copyright text-center p-4">
                        © 2022 Copyright:
                        <a className="text-reset fw-bold" href='#'>Foresite Engineering Consultancy</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
