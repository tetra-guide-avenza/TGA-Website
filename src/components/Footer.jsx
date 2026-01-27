import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const links = {
        'Quick Links': ['About', 'Programs', 'Services', 'Contact'],
        'Programs': ['Python', 'Java', 'AI & ML', 'Web Dev'],
    };

    const scrollTo = (id) => {
        const section = id.toLowerCase().replace('&', '').replace(' ', '');
        document.querySelector(`#${section}`)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="relative border-t border-white/5 bg-secondary/50">
            {/* Neural Background */}
            <div className="absolute inset-0 neural-bg opacity-20" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="sm:col-span-2">
                        <motion.div
                            className="flex items-center gap-3 mb-4"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src="/tga.jpg"
                                alt="TGA"
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-xl font-bold gradient-text">TGA</h3>
                                <p className="text-xs text-gray-400">Tetra Guide Avenza</p>
                            </div>
                        </motion.div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                            Empowering the next generation of tech innovators through expert guidance and professional training.
                        </p>

                        {/* Social Links with Real Icons */}
                        <div className="flex gap-3">
                            <motion.a
                                href="https://www.instagram.com/tga_tetra_guide_avenza_4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg glass-light flex items-center justify-center hover:border-pink-500/50 border border-transparent transition-all"
                                whileHover={{ y: -3, scale: 1.05 }}
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
                                    alt="Instagram"
                                    className="w-5 h-5 object-contain"
                                />
                            </motion.a>
                            <motion.a
                                href="www.linkedin.com/in/tetra-guide-avenza-tga-350a03395"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg glass-light flex items-center justify-center hover:border-blue-500/50 border border-transparent transition-all"
                                whileHover={{ y: -3, scale: 1.05 }}
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"
                                    alt="LinkedIn"
                                    className="w-5 h-5 object-contain"
                                />
                            </motion.a>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(links).map(([title, items]) => (
                        <div key={title}>
                            <h4 className="text-sm font-semibold text-gold mb-4 uppercase tracking-wider">{title}</h4>
                            <ul className="space-y-2">
                                {items.map((item) => (
                                    <li key={item}>
                                        <motion.button
                                            onClick={() => scrollTo(item)}
                                            className="text-gray-400 text-sm hover:text-white transition-colors"
                                            whileHover={{ x: 3 }}
                                        >
                                            {item}
                                        </motion.button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 text-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} <span className="text-gold">TGA - Tetra Guide Avenza</span>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

