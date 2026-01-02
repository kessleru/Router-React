import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Contato from './Components/Contato';
import Produtos from './Components/Produtos';
import Produto from './Components/Produto';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="produto/:id" element={<Produto />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
