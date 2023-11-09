import React from 'react'
import {Link} from 'react-router-dom'
import './Sercom.css'

const Sercom = () => {
  return (
    <div className='sercom'>
        <div className="sercom-container">
            <h1>Services</h1>
            <div className="ser-row">
                <div className="r1">
                    <h2> <Link to='/TelecomPage'>Telecommunications</Link></h2>
                    <p>Provision of remote telecommunications services independent of transport mode for deploying voice…</p>
                </div>
                <div className="r1">
                    <h2> <Link to='/PippingPage'>Structural & Piping Fabrication and Inspection Services</Link></h2>
                    <p>Alfred Peterson Limited provides Mechanical, Structural, Oil field / Marine Engineering and…</p>
                </div>
                <div className="r1">
                    <h2> <Link to='/MaterialPage'>Equipment/Material Supply Services</Link> </h2>
                    <p>Our Procurement department is well equipped to source, procure and supply all…</p>
                </div>
            </div>
            <div className="ser-row">
                <div className="r1">
                    <h2> <Link to='/NDTPage'>NDT Services and Inspection</Link></h2>
                    <p>We carry out Non-destructive Testing/Inspection of MODU pre-load tanks and also the…</p>
                </div>
                <div className="r1">
                    <h2><Link to='/Corrosion'>Corrosion Control</Link></h2>
                    <p>Grit/Sand blasting and application of protective coating to fabricated steel structures and…</p>
                </div>
                <div className="r1">
                    <h2><Link to='ProvisionPage'>Provision of general engineering & alternative power services</Link></h2>
                    <p>Design, welding, UPS, inverter, batteries and fabrication services (Mild steel, Aluminum and…</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sercom