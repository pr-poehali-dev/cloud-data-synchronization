import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/2ae1ef7a-205d-4951-9056-f6d768f29550/files/b702c0a5-eddf-439d-a270-16175913dc1b.jpg"
          alt="Магическая сцена детского фокусника"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-transparent to-purple-950/60" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl mb-4 tracking-widest uppercase text-amber-300"
        >
          Детское магическое шоу
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          ЧУДЕСА
          <br />
          <span className="text-amber-300">НАЧИНАЮТСЯ</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90"
        >
          Незабываемый праздник для вашего ребёнка с волшебными фокусами, смехом и восторгом
        </motion.p>
      </div>
    </div>
  );
}
