import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Crudaxios from './Crudaxios';
import Forupdate from './Forupdate';
import Forcreate from './Forcreate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Crudaxios />}></Route>
        <Route path='/updatehere/:id' element={<Forupdate />}></Route>
        <Route path='/createhere' element={<Forcreate />}></Route>
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
