import { useState } from 'react';
import '../App.css';
import Legend from './Legend';
import LegendResult from './LegendResult';

function RightSide() {

  let [show, setShowResult] = useState(false);

  let component: JSX.Element = (show == false) ? <Legend /> : <LegendResult color="green" />

  return (
    <div className='col-2 pl-25 rightside-size'>
      {component}
    </div>
  );
}

export default RightSide;