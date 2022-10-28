import {useState} from 'react';

function App() {
  const [newValue, setNewValue] = useState('Gus');
  const [list, setList] = useState([
    'Tak',
    'João',
    'Juan'
  ]);

  const addElement = () => {
    setList([...list, newValue]);
  }

  return (
    <>
      <input placeholder='novo elemento' type="text" onChange={(e) => setNewValue('Gus')}/>
      <button onClick={addElement}>Adicionar</button>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>      
    </>
  );
}

export default App;
