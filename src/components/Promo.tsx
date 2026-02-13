import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/2ae1ef7a-205d-4951-9056-f6d768f29550/files/3f8e1226-8952-4856-89cb-7b518d185b86.jpg"
            alt="Магический абстрактный фон"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-purple-950/30" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-amber-300 uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest">
        Праздник мечты
      </h3>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-medium"
        >
          День рождения, выпускной или семейный праздник — подарите детям шоу, о котором они будут рассказывать всем друзьям
        </motion.p>
      </div>

      <p className="absolute bottom-12 left-6 text-white/70 text-sm z-10 uppercase tracking-wide">
        Выезд по всему городу
      </p>
    </div>
  );
}
