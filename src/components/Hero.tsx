export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Los Mejores Aguacates
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Frescos, cremosos y directos del huerto a tu mesa
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🌱</span>
            <span>100% Naturales</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🚚</span>
            <span>Entrega Rápida</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">⭐</span>
            <span>Calidad Premium</span>
          </div>
        </div>
      </div>
    </section>
  );
};