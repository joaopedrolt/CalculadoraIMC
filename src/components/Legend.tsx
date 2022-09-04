import '../App.css';
import LegendBox from './LegendBox';

function Legend() {
    return (
        <>
            <div className='row gap-20 jc-center'>
                <LegendBox color="gray" />
                <LegendBox color="green" />
            </div>
            <div className='row gap-20 mt-20 jc-center'>
                <LegendBox color="yellow" />
                <LegendBox color="red" />
            </div>
        </>
    );
}

export default Legend;