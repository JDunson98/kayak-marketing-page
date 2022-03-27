import './App.css';

import Header from './components/header/Header';
import About from './components/about/About';
import Location from './components/location/Location';
import Pricing from './components/pricing/Pricing';
import ContactForm from './components/contactForm/ContactForm';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <About />
     <Location />
     <Pricing />
     <ContactForm />
     <Footer />
    </div>
  );
}

export default App;
