import logo from './logo.svg';
import './App.css';
import  Saludo from './Componentes/Saludo.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludo/>
      </header>
    </div>
  );
}
export default App;
