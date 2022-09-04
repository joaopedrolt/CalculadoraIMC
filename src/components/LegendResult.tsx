import '../App.css';
import Up from '../assets/images/up.png'
import Down from '../assets/images/down.png'

type Result = {
  color: string;
}

function LegendResult({ color }: Result) {

  let legendBColor: string = "";
  let srcImg: string = "";
  let title: string = "";
  let imgBColor: string = "";
  let result: string = "---";

  switch (color) {
    case "green":
      legendBColor = "legend-green";
      imgBColor = "legendimg-bcolor-green"
      srcImg = Up;
      title = "Normal";
      break;
    case "red":
      legendBColor = "legend-red";
      imgBColor = "legendimg-bcolor-red"
      srcImg = Down;
      title = "Obesidade";
      break;
    case "gray":
      legendBColor = "legend-gray";
      imgBColor = "legendimg-bcolor-gray"
      srcImg = Down;
      title = "Magreza";
      break;
    case "yellow":
      legendBColor = "legend-yellow";
      imgBColor = "legendimg-bcolor-yellow"
      srcImg = Down;
      title = "Sobrepeso";
      break;
  }

  return (
    <div className='row jc-center h-100'>
      <div className={legendBColor + " legend-result h-100 d-flex al-center jc-center column"}>
        <div className={'legend-thumb-result d-flex al-center jc-center ' + imgBColor}><img src={srcImg} className={'thumbImg-result ' + (srcImg == Up ? 'thumb-up' : 'thumb-down')} /></div>
        <h3 className='c-white mt-10'>{title}</h3>
        <p className='c-white mt-5'>IMC está entre {result}</p>
      </div>
    </div>
  );
}

export default LegendResult;