import '../App.css';
import Up from '../assets/images/up.png'
import Down from '../assets/images/down.png'
import leftArrow from '../assets/images/leftarrow.png'

type Result = {
  imc: number;
}

function LegendResult({ imc }: Result) {

  let legendBColor: string = "";
  let srcImg: string = "";
  let title: string = "";
  let imgBColor: string = "";
  let result: number = imc;
  
  console.log(imc);

  switch (true) {
    case imc >= 0 && imc <= 18.5:
      legendBColor = "legend-gray";
      imgBColor = "legendimg-bcolor-gray"
      srcImg = Down;
      title = "Magreza";
      break;
    case imc > 18.5 && imc <= 24.9:
      legendBColor = "legend-green";
      imgBColor = "legendimg-bcolor-green"
      srcImg = Up;
      title = "Normal";
      break;
    case imc > 24.9 && imc <= 30:
      legendBColor = "legend-yellow";
      imgBColor = "legendimg-bcolor-yellow"
      srcImg = Down;
      title = "Sobrepeso";
      break;
    case imc > 30:
      legendBColor = "legend-red";
      imgBColor = "legendimg-bcolor-red"
      srcImg = Down;
      title = "Obesidade";
      break;
  }
  
  return (
    <div className='row jc-center h-100'>
      <div className={legendBColor + " legend-result h-100 d-flex al-center jc-center column"}>
          <div className='d-flex al-center column info'>
            <div className={'legend-thumb-result d-flex al-center jc-center ' + imgBColor}><img src={srcImg} className={'thumbImg-result ' + (srcImg == Up ? 'thumb-up-result' : 'thumb-down-result')} /></div>
            <h3 className='c-white mt-20 fz-28'>{title}</h3>
            <p className='c-white mt-8 fz-20'>O seu IMC é {result.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
}

export default LegendResult;