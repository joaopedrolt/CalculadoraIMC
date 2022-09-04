import '../App.css';
import Up from '../assets/images/up.png'
import Down from '../assets/images/down.png'

type LegendBox = {
    color: string;
}

function LegendBox({ color }: LegendBox) {

    let legendBColor: string = "";
    let srcImg: string = "";
    let imgBColor: string = "";
    let title: string = "";
    let subtitle: string = "";

    switch (color) {
        case "green":
            legendBColor = "legend-green";
            imgBColor = "legendimg-bcolor-green"
            srcImg = Up;
            title = "Normal";
            subtitle = "18.5 e 24.9";
            break;
        case "red":
            legendBColor = "legend-red";
            imgBColor = "legendimg-bcolor-red"
            srcImg = Down;
            title = "Obesidade";
            subtitle = "30 e 99";
            break;
        case "gray":
            legendBColor = "legend-gray";
            imgBColor = "legendimg-bcolor-gray"
            srcImg = Down;
            title = "Magreza";
            subtitle = "0 e 18.5";
            break;
        case "yellow":
            legendBColor = "legend-yellow";
            imgBColor = "legendimg-bcolor-yellow"
            srcImg = Down;
            title = "Sobrepeso";
            subtitle = "24.9 e 30";
            break;
    }

    return (
        <div className={'legend-box d-flex al-center jc-center column ' + legendBColor}>
            <div className={'legend-thumb d-flex al-center jc-center ' + imgBColor}><img src={srcImg} className={'thumbImg ' + (srcImg == Up ? 'thumb-up' : 'thumb-down')} /></div>
            <h3 className='c-white mt-10'>{title}</h3>
            <p className='c-white mt-5'>IMC está entre {subtitle}</p>
        </div>
    );
}

export default LegendBox;