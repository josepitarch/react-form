import './App.css';
import { useRef } from 'react'

function App() {
  const input = useRef()
  const file = useRef()
  const submit = (e) => {
    const form = new FormData()
    form.append('archivo', file.current.files[0])
    form.append('campo', input.current.value)

    fetch('/endpoint', { method: 'POST', body: form })
  }
  return (
    <div>
      <input type='text' name='campo' ref={ input }></input>
      <input type="file" name="" id="" ref={ file } />
      <input type="submit" value="Enviar" onClick={ submit } />
    </div>
  );
}

export default App;
