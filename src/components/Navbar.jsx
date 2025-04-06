import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    },[menuOpen]);
    return (
        <nav className="fixed top-0 w-full z-40 bg-black-300/10 backdrop-blur-lg border-b border-purple-10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="text-purple-500">
                        Jamie<span className="text-white">Duncan</span>
                    </a>
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776; {/* Mobile menu icon */}
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">
                            Home
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
                            About
                        </a>
                        <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">
                            Projects
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
