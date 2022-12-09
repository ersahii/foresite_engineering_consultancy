import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './projects.css';
import Complex from '../../assets/complex.jpeg'
import House from '../../assets/house.jpg'
import Home from '../../assets/home.jpg'

const Projects = () =>{
    return (
        <>
            <div className='container-projects'>
            <div className='container'><h3 id='project-tagline'>our creative work</h3></div>
                <div className="card">
                    <img className="card-img-top" src={House} alt="Card image cap"></img>
                        <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={Complex} alt="Card image cap"></img>
                        <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={Home} alt="Card image cap"></img>
                        <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Projects

