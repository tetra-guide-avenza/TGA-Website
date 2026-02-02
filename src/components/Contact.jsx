import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, margin: "-100px" });

    const email = 'info.tga.official@gmail.com';

    const socials = [
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/tga_tetra_guide_avenza_4',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png',
            color: 'hover:drop-shadow-[0_0_10px_rgba(225,48,108,0.8)]' // Instagram Pink Shadow
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/tetra-guide-avenza-company-350a03395/',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png',
            color: 'hover:drop-shadow-[0_0_10px_rgba(0,119,181,0.8)]' // LinkedIn Blue Shadow
        },
    ];

    return (
        <section ref={containerRef} id="contact" className="relative min-h-[60vh] flex flex-col justify-center py-20 px-4 overflow-hidden bg-black border-t border-white/10">
            {/* Background Bloom */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-[60vw] h-[60vw] bg-gradient-radial from-blue-900/40 via-transparent to-transparent blur-[80px]" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-mono mb-8 uppercase tracking-widest text-gray-400">
                        Ready to Start?
                    </span>
                </motion.div>

                {/* Heading */}
                <div className="relative mb-10">
                    <motion.h2
                        className="text-[10vw] sm:text-[6vw] font-bold leading-none tracking-tighter text-white"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        LET'S CONNECT
                    </motion.h2>
                </div>

                {/* Email - Direct Mailto Link & Adjusted Size */}
                <motion.a
                    href={`mailto:${email}`}
                    className="relative group cursor-pointer mb-16 inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-gold via-orange-500 to-green rounded-full blur-lg opacity-20 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative px-6 py-3 sm:px-10 sm:py-5 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl flex items-center justify-center gap-3">
                        <span className="text-base sm:text-xl md:text-2xl font-light tracking-wide text-white group-hover:text-gold transition-colors">
                            {email}
                        </span>
                        <span className="text-xl">↗</span>
                    </div>
                </motion.a>

                {/* Footer Area - Replaces standard footer */}
                <div className="w-full flex flex-col items-center justify-center gap-6 border-t border-white/10 pt-10">
                    <div className="flex gap-8">
                        {socials.map(social => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                            >
                                <div className={`absolute inset-0 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 rounded-full`}></div>
                                <img
                                    src={social.icon}
                                    alt={social.name}
                                    className={`relative w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300 ${social.color}`}
                                />
                            </a>
                        ))}
                    </div>

                    <p className="text-gray-600 text-xs sm:text-sm mt-4">
                        &copy; {new Date().getFullYear()} TGA. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;

