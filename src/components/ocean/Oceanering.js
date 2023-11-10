import React from 'react'
import ocean from '../../assets/Oceaneering-Logo-White2.jpg'
import './Oceanering.css'

const Oceanering = () => {
  return (
    <div className='oceanering'>
        <div className="oceanering-con">
            {/* <h1>Services</h1>
            <div className="underline"></div> */}
            <div className="oceanering-content">
                <div className="left">
                <h2>OCEANEERING DATA SERVICES</h2>
                <div className="under"></div>
                <div className="image">
                <img src={ocean} alt="MobilLogo" style={{width: '500px', marginTop: '2rem'}} />
                </div>
                <p>
                     
                </p>
                </div>
                <div className="right">
                    <p>
                    Supply and Installation of Carbon Hot Finished Seamless Steel Pipes for Aba Factory Slurry making expansion project, Nigeria.
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Oceanering