export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-purple-950 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-purple-400 text-xs sm:text-sm">Шоу</h3>
                <a
                  href="#about"
                  className="text-white hover:text-amber-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  О фокуснике
                </a>
                <a
                  href="#programs"
                  className="text-white hover:text-amber-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  Программы
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-amber-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  Заказать
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-purple-400 text-xs sm:text-sm">Контакты</h3>
                <a
                  href="tel:+79001234567"
                  className="text-white hover:text-amber-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  +7 (900) 123-45-67
                </a>
                <a
                  href="#instagram"
                  className="text-white hover:text-amber-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  Instagram
                </a>
                <a
                  href="#vk"
                  className="text-white hover:text-amber-300 transition-colors duration-300 text-sm sm:text-base"
                >
                  ВКонтакте
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                ЧАРОДЕЙ
              </h1>
              <p className="text-purple-300 text-sm sm:text-base">{new Date().getFullYear()} Магическое шоу</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
