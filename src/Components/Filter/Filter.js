import './Filter.css';
import React from 'react';

function Filter() {

    return (
        <div className='filter'>
            <button className='filter__button'>Выполнить фильтрацию</button>
            <div className='filter__string-container'>
                <p className='filter__text'>Выбрать дом</p>

            </div>

        </div>
    );

}

export default Filter;