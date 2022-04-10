
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/header/Header';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Ordes from './component/Orders/Ordes';
import RequarAuth from './component/RequarAuth/RequarAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/header'></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/orders' element={
          <RequarAuth>
            <Ordes></Ordes>
          </RequarAuth>
        }></Route>

      </Routes>

    </div>
  );
}

export default App;
