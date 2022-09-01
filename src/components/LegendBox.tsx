import '../App.css';

type LegendBox = {
    src: string;
    thumbUp: boolean;
    backgroundColor: string;
    thumbBackGround: string;
    title: string;
    subtitle: string;
}

function LegendBox({ src, thumbUp, backgroundColor, thumbBackGround, title, subtitle }: LegendBox) {
    return (
        <div className='legend-box d-flex al-center jc-center column' style={{ backgroundColor }}>
            <div className='legend-thumb d-flex al-center jc-center' style={{ backgroundColor: thumbBackGround }}><img src={src} className={'thumbImg ' + (thumbUp ? 'thumb-up' : 'thumb-down')} /></div>
            <h3 className='c-white mt-10'>{title}</h3>
            <p className='c-white mt-5'>IMC está entre {subtitle}</p>
        </div>
    );
}

export default LegendBox;