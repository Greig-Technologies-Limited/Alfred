import React from 'react'
import {Link} from 'react-router-dom'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <div className="portfolio-container">
            <h1>Portfolio</h1>
            <div className="port-row">
                <div className="row1">
                    <div className="img">
                        <Link to='WemaPage'>
                            <div className="info">
                                <p>Wema Bank PLC</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row2">
                    <div className="img">
                        <Link to='UniliverPage'>
                            <div className="info">
                                <p>UNILEVER NIGERIA PLC</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row3">
                    <div className="img">
                        <Link to='OceaneringPage'>
                            <div className="info">
                                <p>OCEANEERING DATA SERVICES</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row4">
                    <div className="img">
                        <Link to='RignetPage'>
                            <div className="info">
                                <p>RigNet (INC.) USA</p>
                            </div>
                        </Link>
                    </div>
                </div>
                
            </div>
            <div className="port-row">
                <div className="row5">
                    <div className="img">
                        <Link to='/MobilPage'>
                            <div className="info">
                                <p>MOBIL PRODUCING NIGERIA UNLIMITED</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row6">
                    <div className="img">
                        <Link to='/NoblePage'>
                            <div className="info">
                                <p>NOBLE DRILLING NIGERIA LTD</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row7">
                    <div className="img">
                        <Link to='DeltaPage'>
                            <div className="info">
                                <p>DELTA AFRIK ENGINEERING LTD</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row8">
                    <div className="img">
                        <Link to='LagosPage'>
                            <div className="info">
                                <p>LAGOS STATE WATER CORPORATION</p>
                            </div>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio