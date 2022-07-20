import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
