import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../component/Home";
import ContactUs from "../component/ContactUs";
import About from "../component/About";
import Layout from "../component/Layout";
export default function AppRouter() {
  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="Layout" element={<Layout />} /> 
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>   
    </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRouter />);