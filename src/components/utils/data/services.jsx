import puerto_aventura from "../../../assets/images/private_experiences/puerto_aventura.jpg"
import cancun from "../../../assets/images/private_experiences/cancun.jpg"
import atv_aventura from "../../../assets/images/private_tours/atv_aventura/atv_aventura.jpg"
import bacalar_siete_colores from "../../../assets/images/private_tours/bacalar_siete_colores/bacalar_siete_colores.jpg"
import chichen_itza_deluxe from "../../../assets/images/private_tours/chichen_itza_deluxe/chichen_itza_deluxe.jpg"
import el_cielo_cozumel from "../../../assets/images/private_tours/el_cielo_cozumel/el_cielo_cozumel.jpg"
import holbox_magico from "../../../assets/images/private_tours/holbox_magico/holbox_magico.jpg"
import isla_contoy from "../../../assets/images/private_tours/isla_contoy/isla_contoy.jpg"
import isla_mujeres_deluxe from "../../../assets/images/private_tours/isla_mujeres_deluxe/isla_mujeres_deluxe.jpg"
import lugares_secretos from "../../../assets/images/private_tours/lugares_secretos/lugares_secretos.jpg"
import sian_kaan_deluxe from "../../../assets/images/private_tours/sian_kaan_deluxe/sian_kaan_deluxe.jpg"
import tulum_casa_tortuga from "../../../assets/images/private_tours/tulum_casa_tortuga/tulum_casa_tortuga.jpg"

export const services = [
  {
    type: "private_experiences",
    name: "Puerto Aventura",
    description: "Private sailing experience from Puerto aventura to Cozumel.",
    foto: puerto_aventura,
    include: [
      {
        type: "food",
        description:
          "Shrimp ceviche, chicken fajitas, guacamole, fruits and snacks.",
      },
      {
        type: "open_bar",
        description:
          "Beers, waters, soft drinks, juices, vodka, tequila, whiskey, rum, white and red wine and drinks prepared as mixology.",
      },
      {
        type: "accesories",
        description: "Snorkel, vest and paddlesurf equipment.",
      },
    ],
    options: [
      {
        duration: "4 hours",
        title: "Bay & Reef",
        description:
          "Travel to a reef to discover marine life and a secret place of crystal clear water where you can relax or have your own celebration.",
      },
      {
        duration: "6 hours",
        title: "Bay & Private Beach",
        description:
          "We will meet the bay of Puerto Aventuras and an exclusive beach in the Riviera Maya surrounded by nature and with crystal clear water.",
      },
      {
        duration: "8 hours",
        title: "Cozumel 'El Cielo'",
        description:
          "We will visit two reefs full of marine life. 'El Cielo', the house of the starfish. The magical waters of Cielito. Here you will have free time to enjoy this unique paradise!",
      },
    ],
    fleet: [
      {
        id: 1,
        name: "Sun Dancer 48",
        capacity: 12,
        prices: {
          "4_hours": 1450,
          "6_hours": 2000,
          "8_hours": null,
        },
      },
      {
        id: 2,
        name: "Flybridge 48",
        capacity: 12,
        prices: {
          "4_hours": 1500,
          "6_hours": 2100,
          "8_hours": null,
        },
      },
      {
        id: 3,
        name: "Azimut 44",
        capacity: 12,
        prices: {
          "4_hours": 1800,
          "6_hours": 2400,
          "8_hours": null,
        },
      },
      {
        id: 4,
        name: "Lagoon 42",
        capacity: 12,
        prices: {
          "4_hours": 2150,
          "6_hours": 2900,
          "8_hours": 3800,
        },
      },
      {
        id: 5,
        name: "Sun Deluxe 55",
        capacity: 15,
        prices: {
          "4_hours": 2050,
          "6_hours": 2800,
          "8_hours": 3700,
        },
      },
    ],
    extra_fee_note: "An additional $15 USD per person dock tax applies to all itineraries.",
  },
  {
    type: "private_experiences",
    name: "Cancún",
    description: "Private sailing experience from Cancún to Isla Mujeres, visiting Playa Norte and Punta Sur.",
    foto: cancun,
    fleet: [
      {
        id: 6,
        name: "Lux Black Mia 46",
      },
      {
        id: 7,
        name: "Azimut 68",
      },
      {
        id: 8,
        name: "Azul 46 ft",
      },
      {
        id: 9,
        name: "Oasis 40 ft",
      },
      {
        id: 10,
        name: "Paradise 58 ft",
      },
      {
        id: 11,
        name: "Red Fire 46 ft",
      },
      {
        id: 12,
        name: "Sea Mami 54 ft",
      },
    ],
  },
  {
    type: "private_tour",
    name: "ATV Aventure",
    description: "Visit the iconic ruins of Tulum by the sea and swim in a stunning cenote surrounded by jungle. Includes transportation, guide, and refreshments.",
    foto: atv_aventura
  },
  {
    type: "tour",
    name: "Bacalar",
    description: "Visit the iconic ruins of Tulum by the sea and swim in a stunning cenote surrounded by jungle. Includes transportation, guide, and refreshments.",
    foto: bacalar_siete_colores
  },
  {
    type: "private_tour",
    name: "Chichen Itza Deluxe",
    description: "Visit the iconic ruins of Tulum by the sea and swim in a stunning cenote surrounded by jungle. Includes transportation, guide, and refreshments.",
    foto: chichen_itza_deluxe
  },
  {
    type: "private_tour",
    name: "El Cielo Cozulmel",
    description: "Visit the iconic ruins of Tulum by the sea and swim in a stunning cenote surrounded by jungle. Includes transportation, guide, and refreshments.",
    foto: el_cielo_cozumel
  },
  {
    type: "private_tour",
    name: "Holbox Magic",
    description: "Visit the iconic ruins of Tulum by the sea and swim in a stunning cenote surrounded by jungle. Includes transportation, guide, and refreshments.",
    foto: holbox_magico
  },
  {
    type: "private_tour",
    name: "Contoy Island",
    description: "Visit the iconic ruins of Tulum by the sea and swim in a stunning cenote surrounded by jungle. Includes transportation, guide, and refreshments.",
    foto: isla_contoy
  },
  {
    type: "private_tour",
    name: "Mujeres Island Delux",
    description: "Visit the iconic ruins of Tulum by the sea and swim in a stunning cenote surrounded by jungle. Includes transportation, guide, and refreshments.",
    foto: isla_mujeres_deluxe
  },
  {
    type: "private_tour",
    name: "Secret Places",
    description: "Visit the iconic ruins of Tulum by the sea and swim in a stunning cenote surrounded by jungle. Includes transportation, guide, and refreshments.",
    foto: lugares_secretos
  },
  {
    type: "private_tour",
    name: "Sian Kaan Deluxe",
    description: "Visit the iconic ruins of Tulum by the sea and swim in a stunning cenote surrounded by jungle. Includes transportation, guide, and refreshments.",
    foto: sian_kaan_deluxe
  },
  {
    type: "private_tour",
    name: "Tulum Casa Tortuga",
    description: "Visit the iconic ruins of Tulum by the sea and swim in a stunning cenote surrounded by jungle. Includes transportation, guide, and refreshments.",
    foto: tulum_casa_tortuga
  },
];
