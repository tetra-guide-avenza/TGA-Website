import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Hero = () => {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Mouse Parallax for "Alive" feel
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX / window.innerWidth - 0.5,
                y: e.clientY / window.innerHeight - 0.5,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const springX = useSpring(mousePosition.x * 20, { stiffness: 100, damping: 20 });
    const springY = useSpring(mousePosition.y * 20, { stiffness: 100, damping: 20 });

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const scrollTo = (id) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
        >
            {/* Dynamic Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Animated Glow Blobs */}
            <motion.div
                style={{ x: springX, y: springY }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
            />
            <motion.div
                style={{ x: useSpring(mousePosition.x * -30), y: useSpring(mousePosition.y * -30) }}
                className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
            />

            <div className="relative z-10 max-w-7xl mx-auto w-full text-center">

                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10 overflow-hidden relative group cursor-pointer"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium tracking-widest text-gray-300 uppercase">Ignite Your Potential</span>
                </motion.div>

                {/* Main Typography with 3D Reveal */}
                <div className="perspective-[1000px] relative">
                    <motion.h1
                        style={{ y: y2 }}
                        className="text-[13vw] sm:text-[10vw] md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
                        initial={{ opacity: 0, rotateX: 90, y: 100 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        FUTURE
                    </motion.h1>

                    <motion.h1
                        style={{ y: y1 }}
                        className="text-[13vw] sm:text-[10vw] md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter gradient-text-animate mb-8"
                        initial={{ opacity: 0, rotateX: 90, y: 100 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        READY
                    </motion.h1>
                </div>

                <motion.p
                    className="text-lg sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    From <span className="text-white font-mono font-semibold">console.log('Hello World')</span> to architecting <span className="text-white font-semibold">Scalable Systems.</span> <br className="hidden sm:block" /> Write code that <span className="gradient-text-animate font-bold">matters.</span>
                </motion.p>

                {/* High-Performance Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <button
                        onClick={() => scrollTo('#programs')}
                        className="group relative px-10 py-5 bg-white text-black text-lg font-bold rounded-full overflow-hidden transition-transform active:scale-95"
                    >
                        <span className="relative z-10 group-hover:text-white transition-colors">Start Your Journey</span>
                        <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                    </button>

                    <button
                        onClick={() => scrollTo('#contact')}
                        className="px-10 py-5 rounded-full border border-white/10 text-white text-lg font-medium hover:bg-white/5 transition-colors active:scale-95 backdrop-blur-sm"
                    >
                        Book Demo
                    </button>
                </motion.div>
            </div>
            {/* Scroll Indicator - Mobile Supported */}
            <motion.div
                className="flex absolute bottom-4 md:bottom-8 left-0 right-0 mx-auto flex-col items-center justify-center gap-2 opacity-60 pointer-events-none z-20 w-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
            >
                <span className="text-[10px] uppercase tracking-widest text-gray-400 text-center">Scroll</span>
                <div className="w-[20px] h-[32px] rounded-full border-2 border-white/30 flex justify-center p-1">
                    <motion.div
                        className="w-1 h-1.5 bg-gold rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
