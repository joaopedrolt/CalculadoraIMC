import { useState } from 'react';
import '../App.css';
import Legend from './Legend';
import LegendResult from './LegendResult';

type Result = {
  imc: number;
}

function RightSide({ imc }: Result) {

  let [show, setShowResult] = useState(false);

  let component: JSX.Element = (show == false) ? <Legend /> : <LegendResult imc={imc}/>

  return (
    <div className='col-2 pl-25 rightside-size'>
      {component}
    </div>
  );
}

export default RightSide;