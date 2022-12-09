import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import Typical from 'react-typical';
const Header = () => {
    return (
        <>
            <div className='header-wraper'>
                <div className='main-info'>
                    <h1 className='header-brand'>foresite<br></br> engineering consultancy</h1>
                    <Typical className="header-services"
                        steps={['Planning', 2000,
                         'Designing', 2000,
                         'Layout', 2000,
                         'Renovation', 2000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                    <button type="button" className="btn btn-success btn-lg">Contact Us</button>
                </div>
            </div>
        </>
    )
}

export default Header
