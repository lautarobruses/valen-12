/* eslint-disable react/prop-types */

function getFlag(countryCode) {
  const countryFlagsBaseAPI = "https://flagcdn.com";
  const size = 20;
  const format = "png";

  const code = countryCode.toLowerCase();
  return `${countryFlagsBaseAPI}/w${size}/${code}.${format}`;
}

const AthleteCard = ({ image, name, available, isFeatured, country, price }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md w-[290px] flex-shrink-0 flex flex-col relative">
      <div className="relative mb-4">
        {/* Imagen del atleta */}
        <div className="w-full h-[300px] flex items-center justify-center rounded-lg overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Badge de disponibilidad */}
        <div className="absolute top-2 right-2 bg-white border border-gray-300 rounded-full px-3 py-1 text-sm text-[rgb(0,168,73)] font-medium">
          {available} DISPONIBLES
        </div>

        {/* Icono destacado */}
        {isFeatured && (
          <div className="absolute top-2 left-2">
            <span className="text-yellow-500 text-2xl">🔥</span>
          </div>
        )}
      </div>

      {/* Nombre y país */}
      <div className="flex items-center gap-2 mb-2">
        <span>
          <img
            src={getFlag(country)}
            alt={`Bandera de ${country}`}
            className="w-6 h-4 object-contain"
          />
        </span>
        <h3 className="text-gray-800 font-medium">{name}</h3>
      </div>

      {/* Precio */}
      <div className="text-sm text-gray-600 mb-2">Precio token ${price}</div>

      {/* Botón */}
      <button className="mt-auto w-full bg-[#004d21] text-white py-2 rounded-lg hover:bg-[#004d21]/80 transition-colors">
        Comprar token
      </button>
    </div>
  );
};

export default AthleteCard;
