import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {HashRouter, Routes, Route} from 'react-router-dom';
import TelecomPage from './routes/TelecomPage';
import PippingPage from './routes/PippingPage';
import MaterialPage from './routes/MaterialPage';
import NDTPage from './routes/NDTPage'
import Corrosion from './routes/Corrosion';
import ProvisionPage from './routes/ProvisionPage';
import WemaPage from './routes/wemaPage';
import UniliverPage from './routes/UniliverPage';
import OceaneringPage from './routes/OceaneringPage';
import RignetPage from './routes/RignetPage';
import MobilPage from './routes/MobilPage';
import NoblePage from './routes/NoblePage';
import DeltaPage from './routes/DeltaPage';
import LagosPage from './routes/LagosPage';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/TelecomPage' element={<TelecomPage />} />
      <Route path='/PippingPage' element={<PippingPage />} />
      <Route path='/MaterialPage' element={<MaterialPage />} />
      <Route path='/NDTPage' element={<NDTPage/>} />
      <Route path='/Corrosion' element={<Corrosion/>} />
      <Route path='/ProvisionPage' element={<ProvisionPage/>}/>
      <Route path='/WemaPage' element={<WemaPage/>}/>
      <Route path='/UniliverPage' element={<UniliverPage/>}/>
      <Route path='/OceaneringPage' element={<OceaneringPage/>}/>
      <Route path='/RignetPage' element={<RignetPage/>}/>
      <Route path='/MobilPage' element={<MobilPage/>}/>
      <Route path='/NoblePage' element={<NoblePage/>}/>
      <Route path='/DeltaPage' element={<DeltaPage/>}/>
      <Route path='/LagosPage' element={<LagosPage/>}/>
      <Route path='/AboutPage' element={<AboutPage/>}/>
      <Route path='/ContactPage' element={<ContactPage/>}/>
    </Routes>
  </HashRouter>



  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);


