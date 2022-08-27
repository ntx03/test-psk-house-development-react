import '../Popup.css';

function PopupString({ name, data }) {
    return (
        <div className='popup__text-container'>
            <p className='popup__text_bold'>{name}</p>
            <p className='popup__text'>{data}</p>
        </div>
    )
}

export default PopupString;