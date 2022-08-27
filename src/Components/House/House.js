import Floor from './Floor/Floor';
import './House.css';

function House({ title, floors, setFloat, setPopup }) {
    // const houseFloors = floors;
    return (
        <div className='house'>
            <div className='house__container'>
                {floors.map((i) => {
                    return <Floor setPopup={setPopup} floor={i.floor} key={i.floor} flats={i.flats} setFloat={setFloat} />
                })}
            </div>
            <h3 className='house__title'>{title}</h3>
        </div>
    );
}

export default House;