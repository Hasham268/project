import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./pages/about/About";
import Home from './pages/Home ';
import FindService from './pages/find-service/FindService';
import BecomeProvider from './pages/become-provider/BecomeProvider';
import ContactUs from './pages/contact-us/ContactUs';
import ServiceWorkers from './pages/service-workers/ServiceWorkers'
import Auth from "../src/components/sign-in/SignIn"
const App = () => (

  // <Home/>
   <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/auth" exact element={<Auth />} />
      <Route path="/about" element={<About />} />
      <Route path="/FindService" element={<FindService />} />
      <Route path="/BecomeProvider" element={<BecomeProvider />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/ServiceWorkers" element={<ServiceWorkers />} />
      </Routes>
    </BrowserRouter>
    );

export default App;
