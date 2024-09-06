import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import SingleProduct from './Component/SingleProduct/SingleProduct';


function App() {
  return (
   <>
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
