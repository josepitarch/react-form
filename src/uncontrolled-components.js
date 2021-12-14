import './App.css';

function App() {
  const submit = (e) => {
    e.preventDefault()
    const data = Array.from(new FormData(e.target))
    console.log(Object.fromEntries(data));
  }
  return (
    <form onSubmit={ submit }>
      <div className="App">
        <input name='campo'></input>
        <input name="campo-2" />
        <input type="submit" value="Enviar" />
      </div>
    </form>
    
  );
}

export default App;
