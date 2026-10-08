import Header from './components/Header.jsx';
import Home from './Pages/Home.jsx';
import Footer from './components/Footer.jsx';
import { Routes, Route } from 'react-router'
import Projects from './Pages/Projects.jsx'

export default function App() {
  return (
    <>
    <a className="skip-link" href="#contenu">Aller au contenu</a>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/projets" element={<Projects/>}/>
    </Routes>
    <Footer/>
    </>
  )
}