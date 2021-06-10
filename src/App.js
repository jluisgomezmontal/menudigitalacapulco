import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'
import { NavBar } from './components/NavBar';
import { Carrusell } from './components/Carrusell';


function App() {
  return (
    <div className="container">
      <h2>App</h2>
      <Carrusell/>
      <NavBar/>
      

    </div>
  );
}

export default App;
