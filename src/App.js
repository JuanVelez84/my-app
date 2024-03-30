import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './ListaUsuario';
import AgregarUsuarios from './AgregarUsuario';
import EditarUsuarioss from './EditarUsuario';

function App() {
  return (
    <div className="App">
      <h1>CRUD MERN</h1>
      <ListaUsuarios/>
      <AgregarUsuarios/>
      <EditarUsuarioss/>
    </div>
  );
}

export default App;
