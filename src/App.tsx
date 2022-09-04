import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LeftSide from './components/Leftside';
import RightSide from './components/RightSide';

function App() {

 let [imc, setImc] = useState(0);
 
 return(
   <>
    <Header />
    <div className='row container-xl mt-30 '>
      <LeftSide setImc={setImc}/>
      <RightSide imc={imc} />
    </div>
   </>
 )
}

export default App;