import './Flat.css';
import mainData from '../../../utils/data.json';
import React, { useEffect } from 'react';


function Flat({ id, setFloat, setPopup }) {
    // данные о квартире
    const dataFlat = mainData.flats[id];

    //состояние прочих условий покупки квартиры
    const [marker, setMarker] = React.useState(false);

    useEffect(() => {
        if (dataFlat.subsidy || dataFlat.marginal || dataFlat.renovation || dataFlat.renovation === true) {
            setMarker(true);
        } else setMarker(false);
    }, []);


    // проверяем статус квартиры
    function flatStatus() {
        if (dataFlat.status === 'Договор') {
            return 'flat flat__yellow';
        } else if (dataFlat.status === 'Выданы ключи') {
            return 'flat flat__sold';
        } else if (dataFlat.status === 'Оформление') {
            return 'flat flat__yellow';
        } else if (dataFlat.status === 'Бронь') {
            return 'flat flat__yellow';
        } else return 'flat';
    }
    function showDataFlat() {
        setFloat(dataFlat);
        setPopup(true);
    }

    return (
        <div className={flatStatus()} onClick={showDataFlat}>
            <p className='flat__type'>{dataFlat.plan_type}</p>
            <div className={marker ? 'flat__marker' : 'flat__marker_none'}></div>
        </div>
    );
}


export default Flat;