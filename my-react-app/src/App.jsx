import { useState } from "react";
import { Routes, Route } from "react-router-dom"; //inimport yung react router
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";
import Home from "./pages/Home.jsx"; // import the homes, about,contact
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true); // sidebar state

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />

            <div className="d-flex flex-grow-1">
                {/* Sidebar wrapper — slides in/out */}
                <div className={`sidebar-wrapper${sidebarOpen ? " sidebar-wrapper--open" : ""}`}>
                    <Sidebar />
                </div>

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
