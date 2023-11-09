import React from 'react'
import './DomainSearch.css'

const DomainSearch = () => {
  return (
    <div className='search-container'>
        <div className="search-sec">
            <input type="text" placeholder='Enter Address' />
            <select id="domains" name='domain' >
                <option value=".com">.com</option>
                <option value=".co">.co</option>
                <option value=".net">.net</option>
                <option value=".info">.info</option>
                <option value=".store">.store</option>
            </select>
            <button>Search</button>
        </div>
        <div className="domain-price">
            <div className="price">
                <span className='dotcom'>.</span>
                <span className='com'>com</span>
                <p>$2.95</p>
            </div>
            <div className="price">
                <span className='dotco'>.</span>
                <span className='co'>co</span>
                <p>$2.95</p>
            </div>
            <div className="price">
                <span className='dotnet'>.</span>
                <span className='net'>net</span>
                <p>$2.95</p>
            </div>
            <div className="price">
                <span className='dotinfo'>.</span>
                <span className='info'>info</span>
                <p>$2.95</p>
            </div>
            <div className="price">
                <span className='dotstore'>.</span>
                <span className='store'>store</span>
                <p>$2.95</p>
            </div>
        </div>
    </div>
  )
}

export default DomainSearch