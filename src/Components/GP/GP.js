import './GP.css';
import object from '../../utils/data.json';
import House from '../House/House';

function Gp({ index, id, setFloat, setPopup }) {
    const houses = object.entrances.filter((i) => { return i.house_id === id }).sort();

    return (
        <div className="gp" >
            <div className='gp__container'>
                {houses.map((i, index) => {
                    return <House title={i.title} floors={i.floors} key={index} setFloat={setFloat} setPopup={setPopup} />
                })}
            </div>
            <h2 className="gp__title">ГП-{index}</h2>
        </div >
    );
}

export default Gp;