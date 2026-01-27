import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Counter Component for Number Animation
const Counter = ({ value, label }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const springValue = useSpring(0, { duration: 2000, bounce: 0 });
    const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            // Parse the number from the string (e.g., "100+" -> 100)
            const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
            springValue.set(numericValue);
        }
    }, [isInView, value, springValue]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text flex items-center justify-center gap-0.5">
                <motion.span>{displayValue}</motion.span>
                <span>{value.replace(/[0-9]/g, '')}</span> {/* Render non-numeric suffix like + or % */}
            </div>
            <div className="text-sm text-gray-400">{label}</div>
        </div>
    );
};

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const cards = [
        {
            icon: '🎯',
            title: 'Our Mission',
            description: 'Bridge the gap between academic learning and industry demands through practical, hands-on education.',
        },
        {
            icon: '🚀',
            title: 'Our Vision',
            description: 'Create a generation of tech professionals who drive innovation and shape the future of technology.',
        },
        {
            icon: '💡',
            title: 'Our Approach',
            description: 'Combine theoretical knowledge with real-world projects, mentored by industry experts.',
        },
    ];

    const stats = [
        { value: '100+', label: 'Students Trained' },
        { value: '12+', label: 'Tech Programs' },
        { value: '95%', label: 'Success Rate' },
    ];

    return (
        <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-b from-transparent via-secondary/50 to-transparent">
            {/* Neural Background */}
            <div className="absolute inset-0 neural-bg opacity-30" />

            <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="inline-block px-4 py-2 mb-4 rounded-full glass border border-green/20 text-green text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    >
                        About Us
                    </motion.span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                        Who We <span className="gradient-text">Are</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Pioneering the future of tech education
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <div className="glass rounded-2xl p-8 h-full text-center border border-transparent hover:border-gold/30 transition-all duration-300">
                                {/* Icon */}
                                <motion.div
                                    className="text-5xl mb-6"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {card.icon}
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gold transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Animated Stats Bar */}
                <motion.div
                    className="mt-16 glass rounded-2xl p-6 sm:p-8 flex flex-wrap justify-center gap-8 sm:gap-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                >
                    {stats.map((stat, index) => (
                        <Counter key={index} value={stat.value} label={stat.label} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
