import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useState } from 'react';

// Specialized Click Animation Component
const CourseClickEffect = ({ type, isClicked, onComplete }) => {
    if (!isClicked) return null;

    const variants = {
        // Shared Java Animation (Expanding Blocks) for ALL courses as requested
        'Global': {
            initial: { scale: 0, opacity: 1, rotate: 0 },
            animate: {
                scale: [0, 1.5],
                opacity: [1, 0],
                rotate: 45,
                transition: { duration: 0.8, ease: "easeOut" }
            }
        }
    };

    // Always use the 'Global' (Java) animation
    return (
        <motion.div
            className="absolute inset-0 bg-white/20 z-0"
            variants={variants.Global}
            initial="initial"
            animate="animate"
            onAnimationComplete={onComplete}
        />
    );
};

const Programs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [clickedCard, setClickedCard] = useState(null);

    const programs = [
        {
            title: 'Python Development',
            description: 'Master Python from basics to advanced applications and automation.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
            gradient: 'from-blue-500/20 to-cyan-500/20',
            border: 'hover:border-blue-500/50',
            shadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]'
        },
        {
            title: 'Java Development',
            description: 'Enterprise-grade Java with Spring Boot and microservices.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            gradient: 'from-orange-500/20 to-red-500/20',
            border: 'hover:border-orange-500/50',
            shadow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]'
        },
        {
            title: 'AI & Machine Learning',
            description: 'Build intelligent systems with TensorFlow and PyTorch.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
            gradient: 'from-yellow-500/20 to-orange-500/20',
            border: 'hover:border-yellow-500/50',
            shadow: 'hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]'
        },
        {
            title: 'Deep Learning',
            description: 'Master neural networks, CNNs, RNNs, and Transformers.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
            gradient: 'from-purple-500/20 to-pink-500/20',
            border: 'hover:border-purple-500/50',
            shadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]'
        },
        {
            title: 'Web Development',
            description: 'Full-stack development with HTML5, CSS3, and modern tools.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            gradient: 'from-orange-600/20 to-red-600/20',
            border: 'hover:border-orange-600/50',
            shadow: 'hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]'
        },
        {
            title: 'Data Analytics',
            description: 'Master MySQL, Power BI, and data visualization techniques.',
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
            gradient: 'from-blue-400/20 to-cyan-500/20',
            border: 'hover:border-blue-400/50',
            shadow: 'hover:shadow-[0_0_30px_rgba(96,165,250,0.5)]'
        },
    ];

    const handleCardClick = (index) => {
        setClickedCard(index);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: -15 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: { type: "spring", damping: 15, stiffness: 100 }
        }
    };

    return (
        <section id="programs" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black/95">

            {/* Neural Network Background Theme - Highly Visible & Animated */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Base Grid */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                {/* Animated Nodes Overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="neural-net-high-vis" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            {/* Nodes */}
                            <circle cx="20" cy="20" r="2" fill="#FFD700" />
                            <circle cx="80" cy="80" r="2" fill="#FFD700" />
                            <circle cx="50" cy="50" r="1.5" fill="#FFF" />

                            {/* Connections */}
                            <path d="M20 20 L50 50 L80 80" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
                            <path d="M80 20 L20 80" stroke="#FFF" strokeWidth="0.5" opacity="0.3" />
                        </pattern>
                    </defs>

                    {/* Moving Pattern Layer */}
                    <motion.rect
                        width="100%"
                        height="100%"
                        fill="url(#neural-net-high-vis)"
                        animate={{ x: [0, -100], y: [0, -100] }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    />
                </svg>

                {/* Pulsing Light Overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-radial from-gold/10 via-transparent to-transparent"
                    animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16 sm:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-mono mb-6 uppercase tracking-widest text-gold/80 bg-black/50 backdrop-blur-md">
                        Our Curriculum
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tighter text-white">
                        MASTER THE <span className="gradient-text-animate">FUTURE</span>
                    </h2>
                </motion.div>

                {/* Programs Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.title}
                            variants={cardVariants}
                            onClick={() => handleCardClick(index)}
                            whileHover={{
                                y: -15,
                                rotateX: 5,
                                scale: 1.02,
                                zIndex: 10,
                                transition: { duration: 0.3 }
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="perspective-[1000px] group cursor-pointer relative"
                        >
                            <div
                                className={`
                  relative h-full bg-secondary/80 backdrop-blur-xl rounded-[2rem] p-8 
                  border border-white/5 ${program.border} ${program.shadow}
                  transition-all duration-500 overflow-hidden
                `}
                            >
                                {/* Specific Click Animation (Java Global) */}
                                <CourseClickEffect
                                    type={program.title}
                                    isClicked={clickedCard === index}
                                    onComplete={() => setClickedCard(null)}
                                />

                                {/* Dynamic Gradient Background with increased opacity for visibility against neural bg */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-5 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />

                                <div className="relative z-10 flex flex-col h-full pointer-events-none">
                                    {/* Floating Icon */}
                                    <motion.div
                                        className="w-20 h-20 mb-6 rounded-2xl bg-black/40 border border-white/10 p-4 flex items-center justify-center shadow-lg"
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <img
                                            src={program.image}
                                            alt={program.title}
                                            className="w-full h-full object-contain filter drop-shadow-lg"
                                        />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gold transition-colors">
                                        {program.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-gray-200 transition-colors">
                                        {program.description}
                                    </p>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Programs;
