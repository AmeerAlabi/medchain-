import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from "./Pages/About";
import Patients from "./Pages/Patients";
import Hospital from "./Pages/Hospital";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";

function App() {
  return (
<Router>
<Navbar />
<Routes>
  <Route path="/" element={<About />} />
  <Route path="/patient" element={<Patients />} />
  <Route path="/hospital" element={<Hospital />} />
  <Route path="/pricing" element={<Pricing />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
<Footer />
</Router>

  )}
export default App