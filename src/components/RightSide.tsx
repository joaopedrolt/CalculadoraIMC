import { useState } from 'react';
import '../App.css';
import Legend from './Legend';
import LegendResult from './LegendResult';

type Result = {
  imc: number;
  showResult: boolean;
}

function RightSide({ imc, showResult }: Result) {

  let component: JSX.Element = (showResult == false) ? <Legend /> : <LegendResult imc={imc} />

  return (
    <div className='col-2 pl-25 rightside-size'>
      {component}
    </div>
  );
}

export default RightSide;