import React, {useState} from 'react';
import DesktopDashboard from './pages/DesktopDashboard';
import MobileDashboard from './pages/MobileDashboard';

import './css/style.scss';

import Navigation from "./components/navbar";


const App = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [mNavbarState, setmNavbarState] = useState(false);
  console.log(mNavbarState)
  return (
    <>
      <Navigation isOpened={isOpened} setIsOpened={setIsOpened} isNavbarState={mNavbarState} setNavbarState={setmNavbarState} />
      <DesktopDashboard />
      {
        isOpened && <MobileDashboard navbarState={mNavbarState} setNavbarState={setmNavbarState} isNavbarState={mNavbarState} />
      }
    </>
  )
}

export default App;
