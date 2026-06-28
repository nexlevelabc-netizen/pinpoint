import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { ContactPanelProvider } from './components/ContactPanelContext';
import { BookAppointment } from './components/BookAppointment';
import { GetInTouch } from './components/GetInTouch';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Compliance from './pages/Compliance';
import Training from './pages/Training';
import WhoWeSupport from './pages/WhoWeSupport';
import WhyChooseUs from './pages/WhyChooseUs';
import Clients from './pages/Clients';
import Partners from './pages/Partners';

function App() {
  useEffect(() => {
    document.title = 'Pinpoint Finance and Compliance Ltd';
  }, []);

  return (
    <ContactPanelProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/training" element={<Training />} />
          <Route path="/who-we-support" element={<WhoWeSupport />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <BookAppointment />
      <GetInTouch />
    </ContactPanelProvider>
  );
}

export default App;
