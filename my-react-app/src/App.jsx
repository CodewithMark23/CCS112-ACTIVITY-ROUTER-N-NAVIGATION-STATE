import { Routes, Route } from "react-router-dom"; //inimport yung react router
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";
import Home from "./pages/Home.jsx"; // import the homes, about,contact
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
    return (
        <>
            <Navbar />

            <div className="d-flex">
                <Sidebar />

                <Routes> // routes na pupuntahan pag nag click
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

            </div>
            <Footer />
        </>
    );
}

export default App;
