import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Movie from './pages/Movie';
import Blog from './pages/Blog';
import Singlecard from './Productcard/Singlecard';
function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Singlecard" element={<Singlecard />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
