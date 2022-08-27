import Flat from '../Flats/Flat';
import './Floor.css';

function Floor({ floor, flats, setFloat, setPopup }) {
    return (
        <div className='floor'>
            <p className='floor__number'>{floor}</p>
            <div className='floor__container'>
                {flats.map((i) => {
                    return <Flat setPopup={setPopup} id={i.id} key={i.number} setFloat={setFloat} />
                })}
            </div>
        </div>
    )
}

export default Floor;