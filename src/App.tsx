import './App.css';
import Header from './components/Header';
import LeftSide from './components/Leftside';
import RightSide from './components/RightSide';

import logo from './assets/images/powered.png';

function App() {

 return(
   <>
    <Header src={logo} height={40} width={200} />
    <div className='row container-xl mt-50'>
      <LeftSide />
      <RightSide />
    </div>
   </>
 )
}

export default App;
