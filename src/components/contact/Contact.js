import React from 'react'
import './Contact.css';
import Tel from '../../assets/Tel.png';
import Folder from '../../assets/folder.webp';
import Chat from '../../assets/chat2.jpeg';
const Contact = () => {
  return (
    <div className='contact'>
      <div className='container'>
        <div className='con-content'>
            <h1>Contact Us</h1>
            <hr style={{height: '1px solid', width:'50px'}}/>
            <div className='con-writeup'>
                <div className='contact-first'>
                <img src={Tel} alt='TEL' style={{width:'60px'}}/>
                  <h4 className='first'>BY PHONE</h4>
                  <p className='class-p-1'>(Mondays - Fridays 9am- 5pm CAT)</p>
                  <p className='class-p-1'>Lagos Nigeria:</p>
                  <p className='class-p-1'>+234-1-4540118</p>
                </div>
                <div className='contact-second'>
                <img src={Folder} alt='TEL' style={{width:'60px', marginRight: '3rem'}}/>
                  <h4 className='second'>START A NEW CASE</h4>
                    <p className='class-p'>We are here for you 24/7 for your compliant </p>
                    <button><h4>START HERE</h4></button>
                </div>
                <div className='contact-third'>
                <img src={Chat} alt='TEL' style={{width:'60px'}}/>
                  <h4 className='third'>LIVE CHAT</h4>
                    <p className='class-p'>Chart with a member of our in house team.</p>
                     <button> <h4>START CHAT</h4></button>
                     </div>
                </div>
            </div>
      </div>
    </div>
  )
}
export default Contact