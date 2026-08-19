import { Routes, Route } from "react-router-dom"; //inimport yung react router
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";
import Home from "./pages/Home.jsx"; // import the homes, about,contact
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />

            <div className="d-flex flex-grow-1">
                <Sidebar />

                <div className="flex-grow-1 overflow-auto">
                    <Routes> {/* routes na pupuntahan pag nag click */}
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
