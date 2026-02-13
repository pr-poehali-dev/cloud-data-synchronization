import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Sparkles",
    title: "Фокусы и иллюзии",
    description: "Захватывающие трюки с картами, шарами и волшебной палочкой, от которых дети не отводят глаз",
  },
  {
    icon: "PartyPopper",
    title: "Интерактивное шоу",
    description: "Каждый ребёнок становится участником — помогает фокуснику и чувствует себя настоящим волшебником",
  },
  {
    icon: "Gift",
    title: "Подарки и сюрпризы",
    description: "Памятные сувениры и маленькие фокусы, которые дети смогут повторить дома",
  },
];

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2 rounded-2xl overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/2ae1ef7a-205d-4951-9056-f6d768f29550/files/b09bc933-110b-4847-bb4f-512feb2103df.jpg"
          alt="Фокусник показывает трюк детям"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-purple-600">Почему выбирают наше шоу</h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight">
          Не просто праздник — настоящее волшебство. Каждое выступление наполнено магией, смехом и восторгом,
          который запомнится надолго.
        </p>

        <div className="flex flex-col gap-6 mb-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                <Icon name={feature.icon} size={24} className="text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-1">{feature.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <button className="bg-purple-600 text-white border border-purple-600 px-6 py-3 text-sm transition-all duration-300 hover:bg-purple-700 cursor-pointer w-fit uppercase tracking-wide rounded-lg">
          Заказать шоу
        </button>
      </div>
    </div>
  );
}
