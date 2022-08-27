import './App.css';
import mainObject from '../../utils/data.json';
import GP from '../GP/GP';
import Popup from '../Popup/Popup';
import { useState } from 'react';

function App() {
  const [popup, setPopup] = useState(false);
  const [float, setFloat] = useState('');

  const gp = mainObject.houses.sort();
  console.log(mainObject);


  return (
    <div className="App">
      {gp.map((i, index) => {
        return <GP id={i} index={index + 1} key={i} setFloat={setFloat} setPopup={setPopup} />
      })}
      <Popup popup={popup} setPopup={setPopup} float={float} />
    </div>
  );
}

export default App;
