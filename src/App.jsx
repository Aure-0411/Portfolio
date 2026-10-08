import Header from './components/Header.jsx';
import Home from './Pages/Home.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
    <a className="skip-link" href="#contenu">Aller au contenu</a>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}