import { ChevronLeft, ChevronRight } from "lucide-react";

import AthleteCard from "./AthleteCard";

import cristianMedina from "../assets/img/cristian-medina.webp?height=300&width=240";
import equiFernandez from "../assets/img/equi-fernandez.webp?height=300&width=240";
import pabloSolari from "../assets/img/pablo-solari.webp?height=300&width=240";
import santiagoSimon from "../assets/img/santiago-simon.webp?height=300&width=240";
import coloBarco from "../assets/img/colo-barco.webp?height=300&width=240";

const athletes = [
  {
    id: 1,
    name: "Cristian Medina",
    country: "AR",
    image: cristianMedina,
    available: 25,
    price: 50,
    isFeatured: true,
    sport: "soccer",
  },
  {
    id: 2,
    name: "Ezequiel Fernández",
    country: "AR",
    image: equiFernandez,
    available: 40,
    price: 45,
    sport: "soccer",
  },
  {
    id: 3,
    name: "Santiago Simón",
    country: "AR",
    image: pabloSolari,
    available: 18,
    price: 35,
    sport: "soccer",
  },
  {
    id: 4,
    name: "Pablo Solari",
    country: "AR",
    image: santiagoSimon,
    available: 22,
    price: 60,
    sport: "soccer",
  },
  {
    id: 5,
    name: "Valentín Barco",
    country: "AR",
    image: coloBarco,
    available: 30,
    price: 75,
    isFeatured: true,
    sport: "soccer",
  },
];

const Featured = () => {
  // Manejador para scrollear el contenedor horizontal
  const scrollContainer = (direction) => {
    const container = document.getElementById("athletes-container");
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          Destacados
        </h2>

        <div className="relative">
          {/* Botón Izquierda */}
          <button
            onClick={() => scrollContainer("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Contenedor de Tarjetas */}
          <div
            id="athletes-container"
            className="flex mx-8 gap-4 overflow-x-auto pb-6 scroll-smooth hide-scrollbar"
          >
            {athletes.map((athlete) => (
              <AthleteCard
                key={athlete.id}
                image={athlete.image}
                name={athlete.name}
                available={athlete.available}
                isFeatured={athlete.isFeatured}
                country={athlete.country}
                sport={athlete.sport}
                price={athlete.price}
              />
            ))}
          </div>

          {/* Botón Derecha */}
          <button
            onClick={() => scrollContainer("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Botón Ir al Marketplace */}
        <div className="text-center mt-6">
          <a
            href="#marketplace"
            className="inline-block border-2 border-[rgb(0,168,73)] text-[rgb(0,168,73)] px-6 py-2 rounded-lg hover:bg-[rgb(0,168,73)] hover:text-white transition-colors"
          >
            Ir al marketplace
          </a>
        </div>
      </div>
    </div>
  );
};

export default Featured;
