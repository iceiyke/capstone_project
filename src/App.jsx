import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About, Contact, Home, Services } from "../src/pages";
import Navbar from "./components/navbar/Navbar";
import GetTable from "./pages/GetTable";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/getTable" element={<GetTable />} />
      </Routes>
    </>
  );
}

export default App;
