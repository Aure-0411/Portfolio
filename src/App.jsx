import Header from './components/Header.jsx';
import Home from './Pages/Home.jsx';
import Footer from './components/Footer.jsx';
import { Routes, Route } from 'react-router'
import Projects from './Pages/Projects.jsx'
import Parcours from './Pages/Parcours.jsx'
import Experiences from './Pages/Experiences.jsx'
import Contact from './Pages/Contact.jsx'

export default function App() {
  return (
    <>
    <a className="skip-link" href="#contenu">Aller au contenu</a>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/projets" element={<Projects/>}/>
    <Route path="/parcours" element={<Parcours/>}/>
    <Route path="/experiences" element={<Experiences/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}