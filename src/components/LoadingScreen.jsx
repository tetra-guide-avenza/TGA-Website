import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
            onClick={onComplete} // Allow click to skip
        >
            {/* Container for the sliding 'Doors' */}
            <div className="relative w-full h-full flex flex-col items-center justify-center">

                {/* Split Screen Mask Effect - Top Half */}
                <motion.div
                    className="absolute inset-x-0 top-0 h-1/2 bg-black z-20 flex items-end justify-center overflow-hidden"
                    initial={{ y: 0 }}
                    animate={{ y: "-100%" }}
                    transition={{ duration: 1, delay: 3, ease: [0.76, 0, 0.24, 1] }}
                    onAnimationComplete={onComplete}
                >
                    {/* Text visible in top half */}
                    <div className="text-[20vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 translate-y-[50%] leading-none">
                        TGA
                    </div>
                </motion.div>

                {/* Split Screen Mask Effect - Bottom Half */}
                <motion.div
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-black z-20 flex items-start justify-center overflow-hidden"
                    initial={{ y: 0 }}
                    animate={{ y: "100%" }}
                    transition={{ duration: 1, delay: 3, ease: [0.76, 0, 0.24, 1] }}
                >
                    {/* Text visible in bottom half */}
                    <div className="text-[20vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-black -translate-y-[50%] leading-none">
                        TGA
                    </div>
                </motion.div>


                {/* Central Line / Energy Beam */}
                <motion.div
                    className="absolute w-full h-[2px] bg-gold z-30"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    style={{ originX: 0.5 }}
                />

                {/* Subtext appearing on the line */}
                <motion.div
                    className="absolute z-40 bg-black px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <div className="text-gold font-mono text-sm sm:text-lg tracking-[0.5em] uppercase whitespace-nowrap">
                        Tetra Guide Avenza
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default LoadingScreen;
