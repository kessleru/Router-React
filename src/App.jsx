import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Contato from './Components/Contato';
import Produtos from './Components/Produtos';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
