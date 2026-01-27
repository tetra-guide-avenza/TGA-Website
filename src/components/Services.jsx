import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

// Reusable Counter Component
const Counter = ({ value, label, icon }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10px" });
    const springValue = useSpring(0, { duration: 2500, bounce: 0 });
    const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
            springValue.set(numericValue);
        }
    }, [isInView, value, springValue]);

    return (
        <motion.div
            ref={ref}
            className="glass-neon rounded-2xl p-6 flex items-center gap-4 relative overflow-hidden group"
            whileHover={{ y: -4 }}
        >
            {/* Scanline Effect */}
            <motion.div
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <div className="w-12 h-12 rounded-full bg-white/10 p-2 flex items-center justify-center border border-white/20">
                <img src={icon} alt="icon" className="w-full h-full object-contain filter invert brightness-200 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </div>
            <div className="flex-1 relative z-10">
                <div className="text-sm text-gray-400 font-mono tracking-wider">{label}</div>
            </div>
            <div className="text-3xl font-bold gradient-text flex items-center relative z-10">
                <motion.span>{displayValue}</motion.span>
                <span>{value.replace(/[0-9]/g, '')}</span>
            </div>
        </motion.div>
    );
};

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const services = [
        {
            icon: 'https://cdn-icons-png.flaticon.com/512/1063/1063196.png', // Career Guidance / Mentorship
            title: 'Career Guidance',
            description: 'One-on-one mentorship with industry professionals to map your career trajectory.',
            features: ['Personalized Roadmap', 'Industry Insights', 'Expert Sessions'],
            color: 'from-blue-500 to-cyan-400'
        },
        {
            icon: 'https://cdn-icons-png.flaticon.com/512/3281/3281329.png', // Career Planning (Growth)
            title: 'Career Planning',
            description: 'Customized roadmaps with skills development and milestone tracking.',
            features: ['Skill Assessment', 'Certification Path', 'Progress Tracking'],
            color: 'from-purple-500 via-pink-500 to-orange-400' // Added brighter tone/yellow-orange mix
        },
        {
            icon: 'https://cdn-icons-png.flaticon.com/512/942/942799.png', // Placement / Briefcase
            title: 'Placement Support',
            description: 'Resume optimization, interview prep, and connections with hiring partners.',
            features: ['Resume Review', 'Mock Interviews', 'Job Referrals'],
            color: 'from-green-500 to-emerald-400'
        },
        {
            icon: 'https://cdn-icons-png.flaticon.com/512/3059/3059410.png', // Freelancing / Laptop
            title: 'Freelancing Hub',
            description: 'Real-world project opportunities to build your portfolio and earn.',
            features: ['Live Projects', 'Portfolio Building', 'Client Management'],
            color: 'from-gold to-orange-400'
        },
    ];

    return (
        <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black">
            {/* tech background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20 sm:mb-32">
                    <motion.span
                        className="text-gold text-xs font-mono tracking-[0.3em] uppercase mb-4 block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
            // Services.exe
                    </motion.span>
                    <motion.h2
                        className="text-5xl sm:text-7xl font-bold text-white mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.1 }}
                    >
                        WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">OFFER</span>
                    </motion.h2>
                </div>

                {/* Services Grid - Holographic Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50, rotateX: -10 }}
                            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)"
                            }}
                            className="group relative overflow-hidden p-1 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/0 hover:from-gold/20 hover:to-gold/0 transition-all duration-500"
                        >
                            <div className="relative h-full bg-black/80 backdrop-blur-xl rounded-[1.9rem] p-8 sm:p-10 border border-white/5 group-hover:border-gold/30 transition-colors">

                                {/* Floating Hologram Icon */}
                                <div className="mb-8 relative">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity`} />
                                    <motion.div
                                        className="relative w-16 h-16 filter drop-shadow-lg"
                                        whileHover={{ rotateY: 180 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <img
                                            src={service.icon}
                                            alt={service.title}
                                            className="w-full h-full object-contain filter invert opacity-90 group-hover:opacity-100 transition-opacity"
                                        />
                                    </motion.div>
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gold transition-colors font-mono">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                                    {service.description}
                                </p>

                                <ul className="space-y-4">
                                    {service.features.map(feature => (
                                        <li key={feature} className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-white transition-colors">
                                            <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.color}`}></span>
                                            <span className="font-mono tracking-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Corner Accents */}
                                <div className="absolute top-6 right-6 w-2 h-2 border-t border-r border-white/20 group-hover:border-gold/50 transition-colors" />
                                <div className="absolute bottom-6 left-6 w-2 h-2 border-b border-l border-white/20 group-hover:border-gold/50 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Animated Bottom Stats */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                >
                    <Counter
                        icon="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                        value="10+"
                        label="Expert Mentors"
                    />
                    <Counter
                        icon="https://cdn-icons-png.flaticon.com/512/3246/3246923.png"
                        value="100+"
                        label="Projects Delivered"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
