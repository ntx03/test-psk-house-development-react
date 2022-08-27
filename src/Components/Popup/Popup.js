import './Popup.css';
import PopupString from './PopupString/PopupString';

function Popup({
    cost,
    type,
    floor,
    number,
    square,
    status,
    plan_type,
    subsidy,
    marginal,
    renovation,
    installment,
    popup,
    setPopup,
    float }) {

    const translateBoolian = (data) => data ? "Да" : "Нет";


    return (
        <div className={popup ? 'popup' : 'popup_none'}>
            <h2 className='popup__title'>Сведения о квартире</h2>
            <PopupString name={'Цена в рублях:'} data={`${float.cost} рублей`} />
            <PopupString name={'Номер этажа:'} data={`${float.floor} этаж`} />
            <PopupString name={'Номер квартиры:'} data={float.number} />
            <PopupString name={'Тип объекта(квартира, нежилое, паркинг):'} data={float.type} />
            <PopupString name={'Тип планировка:'} data={float.plan_type} />
            <PopupString name={'Площадь:'} data={`${float.square} кв.м`} />
            <PopupString name={'Текущий статус (Выданы ключи, бронь, свободна):'} data={float.status} />
            <PopupString name={'Субсидированная:'} data={translateBoolian(float.subsidy)} />
            <PopupString name={'Маржинальная:'} data={translateBoolian(float.marginal)} />
            <PopupString name={'С ремонтом:'} data={translateBoolian(float.renovation)} />
            <PopupString name={'С рассрочкой:'} data={translateBoolian(float.installment)} />
            <button className='popup__button' onClick={() => setPopup(false)}>Закрыть</button>
        </div>
    );
}

export default Popup;