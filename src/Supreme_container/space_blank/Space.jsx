import React from "react";
import Button from '@mui/material/Button';
import './space.css';

const Space = () => {
    return (
        <>
            <div className="spaceContainer">
                <div className="spaceParent">
                    <h3>Already have an excellent idea!</h3>
                    <p>And want to know is it possible to implement</p>
                </div>
                    <div className="btnContact"><Button variant='contained' color='success' size='large'>Contact Us</Button></div>
            </div>
        </>
    )
}
export default Space;