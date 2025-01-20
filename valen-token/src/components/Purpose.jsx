const Purpose = () => {
  return (
    <div
      className="bg-gradient-to-br from-gray-900 via-purple-900 to-purple-800 py-12 md:py-20"
      style={{
        background:
          "radial-gradient(55% 100% at 50% 80%, rgb(0, 77, 33) 0%, rgba(0,0,0) 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight max-w-4xl mx-auto">
          Nuestro propósito es ayudar a que todos los jugadores de tenis y golf del mundo puedan desarrollar su carrera
          a través del poder de financiamiento de sus fans.
        </h2>
      </div>
    </div>
  );
};

export default Purpose;
