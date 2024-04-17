import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';

import {Routes,Route} from 'react-router-dom'
import CartDetails from './components/CartDetails';
import Cancel from './components/Cancel';
import Success from './components/Success';

function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/cart' element={<CartDetails/>} />
            <Route path='/success' element={<Success/>} />
            <Route path='/cancel' element={<Cancel/>} />
        </Routes>
    </>
  );
}

export default App;
