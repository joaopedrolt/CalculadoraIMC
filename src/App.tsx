import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LeftSide from './components/Leftside';
import RightSide from './components/RightSide';

function App() {

 let [imc, setImc] = useState(0);
 let [showResult, setShowResult] = useState(false);

 return(
   <>
    <Header />
    <div className='frame row container-xl mt-30 '>
      <LeftSide setImc={setImc} showResult={showResult} setShowResult={setShowResult}/>
      <RightSide imc={imc} showResult={showResult} />
    </div>
   </>
 )
}

export default App;