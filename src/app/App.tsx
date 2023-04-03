import {useState } from 'react';
import Row from 'react-bootstrap/Row';

import Summary from '../components/summary/summary';
import Menu from '../components/menu/menu'
import Check from '../components/check/check';
import {Intro } from '../components/intro/intro'
import { Info } from '../components/intro/info';

function App() {
  let [showInfo, setShowInfo] = useState(true);
  let [showInfo2, setShowInfo2] = useState(false);

  return (
    <><Intro showInfo={showInfo} setShowInfo={setShowInfo} setShowInfo2={setShowInfo2}></Intro>
    <Info show={showInfo2} setShowInfo2={setShowInfo2}></Info>
    {(showInfo==false && showInfo2==false)?
      (
      <><Row className="summary align-items-center">
            <Summary></Summary>
          </Row><Row className="menu">
              <Menu></Menu>
            </Row><Row className="check">
              <Check></Check>
            </Row></>):
      null
    }
    </> 
  );
}

export default App;
