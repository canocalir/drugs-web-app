import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import CardArea from './components/CardArea/CardArea';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <CardArea/>
      <Footer/>
    </div>
  );
}

export default App;
