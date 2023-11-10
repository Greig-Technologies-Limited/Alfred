import React from 'react'
import './About.css';
import LogoAbout from '../../assets/logoAbout.jpeg';
import About2 from '../../assets/about2.jpeg';
import About3 from '../../assets/about3.jpeg';
const About = () => {
  return (
    <div classNmae='about'>
      <div className='container'>
        <div className='aboutContent'>
            <h1 className='about-h1'>About</h1>
              <hr style={{height: '1px solid', width:'50px'}}/>
             <img src={LogoAbout} alt='LogoAbout' />
              <p className='about-p'>
              <span> ALFRED PETERSON LIMITED </span> was incorporated in Nigeria as a limited liability company in January 2004 to render multiple engineering services to the Nigerian Oil, Gas & Maritime industries, with focus one the provision of offshore communications solutions, Technology and Maintenance Services. In the past few years, Alfred Peterson Limited has transformed into a full-fledged EPCM company, with expanded focus to include structural and piping engineering and fabrication, civil engineering, construction and supply of heavy-duty mechanical equipment & machineries, back up an renewable energy solutions and varied technical support solutions.
                  </p>
                  <p className='about-p'>
                  We are a company with staff comprising a select group of highly experienced, service-oriented individuals that bring a unique attitude of quality to the ICT provision and maintenance business. These individuals with such varied backgrounds have been moulded into a winning team of professionals allowing ALFRED PETERSON LIMITED to better serve the EPCM needs of the Nigerian Offshore and Construction Industries.
                  </p>
                  <p className='about-p'>
                  Since 2004, <span> ALFRED PETERSON LIMITED</span> as partnered with <span>RigNet</span> USA; a leading global provider of managed remote communications, networks and collaborative applications dedicated to the oil and gas industry. The Company provides solutions ranging from fully-managed voice and data networks to more advanced applications that include video conferencing, real-time data services and advanced medical services to remote sites in over 30 countries on six continents, effectively spanning the drilling and production industry.
                  </p>
          <div className='about-img'>
          <img src={About2} alt="about" />
          <img src={About3} alt="about" />
          </div>
          <p className='about-p-l'>
                  “Our focus is to provide the oil and gas industry with the mission critical communications solutions to improve real-time decision making, reduce operating costs and improve the quality of life at remote locations”.
                  </p>
        </div>
      </div>
    </div>
  )
}
export default About;