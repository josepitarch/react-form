import './App.css';
import { useState } from 'react'

function App() {
  const [value, setValue] = useState({
    normal: '',
    texto: '',
    select: '',
    check: false,
    estado: 'triste'
  })
  const handleChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.type === 'checkbox'
      ? target.checked
      : target.value
    })
  }
  console.log(value);

  return (
    <div>
      { value.length < 5 ? <span>Longitud menor a 5</span> : null }
      <input type='text' name='normal' value={ value.normal } onChange={ handleChange }/>
      <textarea name='texto' value = { value.texto } onChange={ handleChange } />

      <select value={ value.select } name='select' onChange={ handleChange }>
        <option value=''>-- Seleccione --</option>
        <option value='chanchofeliz'>Chancho feliz</option>
        <option value='chanchitofeliz'>Chanchito feliz</option>
        <option value='chanchitotriste'>Chanchito triste</option>
      </select>

      <input type="checkbox" name="check" onChange={ handleChange } checked={ value.check } id="" />

      <div>
        <label>Chancho</label>
        <input
          onChange={ handleChange }
          type="radio"
          name="estado"
          value={ 'feliz' }
          checked={ value.estado === 'feliz'}
        /> Feliz
        <input
          onChange={ handleChange }
          type="radio"
          name="estado"
          value={ 'triste' }
          checked={ value.estado === 'triste'}
        /> Triste
        <input
          onChange={ handleChange }
          type="radio"
          name="estado"
          value={ 'felipe' }
          checked={ value.estado === 'felipe'}
        /> Felipe
      </div>
    </div>
  )
}

export default App;