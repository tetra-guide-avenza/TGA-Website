import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Programs', href: '#programs' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollTo = (href) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'py-4 bg-black/50 backdrop-blur-md border-b border-white/5' : 'py-6 bg-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo - Minimal with Animation */}
                        <button
                            onClick={() => scrollTo('#home')}
                            className="group flex items-center gap-3"
                        >
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                {/* Rotating Ring */}
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-gold via-white to-gold opacity-70"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                                {/* Inner Background to hide ring center */}
                                <div className="absolute inset-[2px] rounded-full bg-black z-0" />

                                {/* Logo Image */}
                                <div className="relative z-10 w-full h-full rounded-full overflow-hidden border border-white/10 group-hover:border-gold/50 transition-colors p-[2px]">
                                    <img src="/tga.jpg" alt="TGA" className="w-full h-full object-cover rounded-full" />
                                </div>
                            </div>
                            <span className="text-lg font-bold tracking-tight text-white group-hover:text-gold transition-colors">TGA</span>
                        </button>

                        {/* Desktop Nav - Clean */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollTo(link.href)}
                                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                                </button>
                            ))}
                        </div>

                        {/* CTA & Mobile Toggle */}
                        <div className="flex items-center gap-4">
                            <motion.button
                                onClick={() => scrollTo('#contact')}
                                className="hidden md:block px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gold transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Let's Talk
                            </motion.button>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
                            >
                                <motion.span
                                    className="w-6 h-0.5 bg-white group-hover:bg-gold transition-colors"
                                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                />
                                <motion.span
                                    className="w-6 h-0.5 bg-white group-hover:bg-gold transition-colors"
                                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                />
                                <motion.span
                                    className="w-6 h-0.5 bg-white group-hover:bg-gold transition-colors"
                                    animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Full Screen Mobile Menu - High End Style */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-black flex items-center justify-center"
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.name}
                                    onClick={() => scrollTo(link.href)}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="text-4xl font-bold text-white hover:text-gold transition-colors tracking-tight"
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
