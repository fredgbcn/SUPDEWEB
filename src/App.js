import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header.jsx'
import Categories from './components/Categories';
import Article from './components/Article/Article';
function App() {
  return (
    <div className="App">
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/article/:id" element={<Article/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
