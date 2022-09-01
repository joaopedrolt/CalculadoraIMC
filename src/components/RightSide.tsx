import '../App.css';
import Up from '../assets/images/up.png'
import Down from '../assets/images/down.png'
import LegendBox from './LegendBox';

function RightSide() {
    return(
      <div className='col-2 pl-25'>
        <div className='row gap-20 jc-center'>
          <LegendBox src={Down} thumbUp={false} backgroundColor="#909ea7" thumbBackGround="#818c95" title="Magreza" subtitle="0 e 18.5" />
          <LegendBox src={Up} thumbUp={true} backgroundColor="#02a860" thumbBackGround="#029757" title="Normal" subtitle="18.5 e 24.9" />
        </div>
        <div className='row gap-20 mt-20 jc-center'>
          <LegendBox src={Down} thumbUp={false} backgroundColor="#e2ac30" thumbBackGround="#c79927" title="Sobrepeso" subtitle="24.9 e 30" />
          <LegendBox src={Down} thumbUp={false} backgroundColor="#c13735" thumbBackGround="#a8302f" title="Obesidade" subtitle="30 e 99" />
        </div>
      </div>
    );
}
   
export default RightSide;