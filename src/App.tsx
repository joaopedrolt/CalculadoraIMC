import './App.css';
import Header from './components/Header';
import LeftSide from './components/Leftside';
import RightSide from './components/RightSide';

function App() {

 return(
   <>
    <Header />
    <div className='row container-xl mt-30 '>
      <LeftSide />
      <RightSide />
    </div>
   </>
 )
}

export default App;