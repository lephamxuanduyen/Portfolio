import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './component/header/header';
import Home from './component/home/home'
import Project from './component/project/project'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'

function App() {
  const scrollChangeNavBg = () => {
    var header = document.querySelector('.header');
    if (window.scrollY >=20){
      header.style.backgroundColor = 'linear-gradient(rgba(0,0,0,0.8), rgba(255,255,255,0))';
    }
  }
  return (
    <div className="App" onScroll={scrollChangeNavBg}>
        <Header/>
      <Routes>
        <Route path='/' element={
        <Home/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
