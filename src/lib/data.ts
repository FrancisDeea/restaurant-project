import { FacebookIcon, GoogleIcon, InstagramIcon } from "@/lib/icons"
import { Menu } from "./definitions";

export const menu: Menu = {
  ensaladas: [
    {
      name: "Beicon",
      price: "9",
      description:
        "Mix de lechugas, medallón de beicon y queso de cabra, frutos secos y salsa de miel y mostaza.",
      img: "/assets/platos/ensalada-bacon-queso-cabra.webp",
      alt: "ensalada de bacon y queso de cabra",
      allergens: ["cascara", "mostaza", "sesamo", "lacteo", "sulfito"],
    },

    {
      name: "Cesar",
      price: "9",
      description: "Mix de lechugas, pollo, picatostes y escamas de parmesano.",
      img: "/assets/platos/ensalada-cesar.webp",
      alt: "ensalada cesar",
      allergens: ["gluten", "lacteo", "sulfito"],
    },
  ],

  entrantes: [
    {
      name: "Twister de langostinos",
      price: "8.50",
      description: "6 Uds. con salsa sweet chili.",
      img: "/assets/platos/twistter-langostinos-crujientes.webp",
      alt: "twister de langostinos",
      allergens: ["soja", "crustaceo", "pescado", "gluten"],
    },

    {
      name: "Lagrimitas de pollo",
      price: "9.50",
      description: "Con patatas fritas y salsa gaucha argentina.",
      img: "/assets/platos/lagrimas-pechuga-pollo.webp",
      alt: "lagrimitas de pollo",
      allergens: ["gluten", "huevo", "mostaza"],
    },

    {
      name: "Bravas a la Camboria",
      price: "6",
      description: "Papas fritas con salsa brava al estilo de Madrid.",
      img: "/assets/platos/patatas-bravas-caseras.webp",
      alt: "papas bravas madrileñas",
      allergens: ["sesamo"],
    },

    {
      name: "Roscas",
      price: "9",
      description: "De jamón serrano ó de lomo, con tomate y queso.",
      img: "/assets/platos/rosca-jamon-lomo-queso.webp",
      alt: "rosca de jamon o lomo de cerdo",
      allergens: ["gluten", "lacteo"],
    },

    {
      name: "Milhojas con fuá de pato y queso de cabra",
      price: "10",
      description: null,
      img: "/assets/platos/milhojas-fua-queso-cabra.webp",
      alt: "Milhojas con fuá de pato y queso de cabra",
      allergens: ["gluten", "lacteo", "huevo"],
    },

    {
      name: "Risotto",
      price: "10",
      description: "De champiñones, solomillo y parmesano.",
      img: "/assets/platos/risotto-solomillo-setas.webp",
      alt: "risotto de solomillo",
      allergens: ["lacteo", "soja"],
    },

    {
      name: "Cazuela de papas gratinadas",
      price: "10",
      description: "Papas fritas con mayonesa, beicon y 3 quesos gratinados.",
      img: "/assets/platos/cazuela-papas-gratinadas-bacon.webp",
      alt: "cazuela de papas gratinadas con bacon",
      allergens: ["lacteo", "huevo"],
    },
  ],

  principales: [
    {
      name: "Croquetas de la casa",
      price: "10 / 5",
      description: "8 / 4 uds. de puchero, rabo de toro ó pollo al curry.",
      img: "/assets/platos/croquetas-puchero-rabo-toro-curry.webp",
      alt: "croquetas caseras de la casa",
      allergens: ["lacteo", "huevo", "gluten"],
    },

    {
      name: "Flamenquín Cordobés",
      price: "10",
      description: "Relleno de lomo, jamón serrano, queso y pimiento.",
      img: "/assets/platos/flamenquin-cordobes-casero.webp",
      alt: "flamenquin cordobes casero",
      allergens: ["lacteo", "huevo", "gluten"],
    },

    {
      name: "Cazuela de huevos rotos y virutas de foie",
      price: "10",
      description: "Papas panaderas con virutas de jamón serrano y foie.",
      img: "/assets/platos/cazuela-patatas-gratinadas-bacon.webp",
      alt: "huevos rotos con jamon y foie",
      allergens: ["lacteo", "huevo"],
    },

    {
      name: "Tosta de Queso Cabra",
      price: "9.50",
      description: "Queso de cabra, cebolla caramelizada y miel de caña.",
      img: "/assets/platos/tosta-queso-cabra-cebolla-caramelizada.webp",
      alt: "tosta de queso de cabra y cebolla caramelizada",
      allergens: ["gluten", "lacteo", "sesamo"],
    },

    {
      name: "Tosta de Pulpo",
      price: "11",
      description: "Pulpo con pimenton de la Vera, tomate y queso gratinado.",
      img: "/assets/platos/tosta de pulpo tomate y queso.webp",
      alt: "tosta de pulpo, tomate y queso gratinado.",
      allergens: ["gluten", "lacteo", "crustaceo", "pescado", "sesamo"],
    },

    {
      name: "Tosta de Alioli Gratinado",
      price: "8",
      description: "Gratinado de alioli, parmesano y 3 quesos.",
      img: "/assets/platos/tosta-pan-ajo-queso-cabra.webp",
      alt: "tosta de alioli gratinado, parmesano y tres quesos",
      allergens: ["gluten", "lacteo", "sesamo"],
    },
  ],

  asiaticos: [
    {
      name: "Katsu sando D'Graná",
      price: "14",
      description:
        "Pan brioche, ensalada asiática, crujiente de pollo, mayo kimchi y teriyaki.",
      img: "/assets/platos/katsu-sando-dgrana-2.webp",
      alt: "Sandwich katsu sando d'grana",
      allergens: ["mostaza", "huevo", "gluten", "soja", "sesamo"],
    },

    {
      name: "Tartar de Atún en crujiente de arroz",
      price: "16",
      description:
        "Con emulsión de mango a nuestro estilo, aguacate y alga nori.",
      img: "/assets/platos/tartar atun crujiente arroz.webp",
      alt: "Sandwich katsu sando d'grana",
      allergens: ["lacteo", "pescado", "soja", "sesamo"],
    },

    {
      name: "Pollo teriyaki",
      price: "11",
      description: "Con arroz y salsa sweet chili.",
      img: "/assets/platos/pollo-teriyaki-arroz.webp",
      alt: "pollo teriyaki con arroz",
      allergens: ["lacteo", "huevo", "gluten"],
    },

    {
      name: "Bao de solomillo ibérico",
      price: "12",
      description: "Con mayokimchi. 3 uds.",
      img: "/assets/platos/pan-bao-solomillo.webp",
      alt: "pan bao de solomillo",
      allergens: ["gluten", "huevo"],
    },

    {
      name: "Wok de noodles Udon",
      price: "11",
      description: "Pídelos de pollo, gambas ó mixto (+1€)",
      img: "/assets/platos/wok-noodles-udon-pollo-gambas.webp",
      alt: "wok de noodles udon con pollo y gambas",
      allergens: [
        "gluten",
        "cascara",
        "sesamo",
        "soja",
        "crustaceo",
        "pescado",
      ],
    },
  ],

  pescados: [
    {
      name: "Cazón en adobo frito",
      price: "9.50",
      description: null,
      img: "/assets/platos/cazon-frito-adobo.webp",
      alt: "cazon frito en adobo",
      allergens: ["gluten", "pescado", "sulfito"],
    },

    {
      name: "Almejas a la marinera",
      price: "10.50",
      description: null,
      img: "/assets/platos/almejas-marinera.webp",
      alt: "almejas a la marinera",
      allergens: ["crustaceo", "sulfito"],
    },

    {
      name: "Pata de pulpo",
      price: "14.50",
      description:
        "Pata de pulpo salteada, cremoso de romesco y alioli de pimentón de La Vera.",
      img: "/assets/platos/pata-pulpo-salsa-romesco.webp",
      alt: "pata de pulpo a la plancha con romesco",
      allergens: ["cascara", "sesamo", "sulfito", "pescado"],
    },
  ],

  exigentes: [
    {
      name: "Pluma ibérica BT",
      price: "15",
      description:
        "Cocinada a baja temperatura, con jamón serrano y aceite trufado.",
      img: "/assets/platos/pluma-iberica-baja-temperatura.webp",
      alt: "pluma iberica a baja temperatura con patatas",
      allergens: null,
    },

    {
      name: "Costillas de cerdo BBQ",
      price: "15",
      description: "Cocinadas a baja temperatura con salsa bbq y papas.",
      img: "/assets/platos/costilla-cerdo-bbq.webp",
      alt: "costillas de cerdo barbacoa",
      allergens: ["sesamo"],
    },

    {
      name: "Milhojas",
      price: "10",
      description: "Con queso de cabra, jamón serrano y confitura de mango.",
      img: "/assets/platos/milhojas-queso-cabra-mango.webp",
      alt: "milhojas de queso cabra, mango y jamon",
      allergens: ["gluten", "lacteo"],
    },

    {
      name: "Sacos de calabacín",
      price: "9",
      description: "Rellenos de bechamel de puerros y boletus.",
      img: "/assets/platos/sacos de calabacin con bechamel de puerros y boletos.webp",
      alt: "sacos de calabacin rellenos",
      allergens: ["huevo", "lacteo"],
    },

    {
      name: "Gofre de pollo Crunchy",
      price: "10.50",
      description: "Con queso americano cheddar, feta, mezclum y aove trufado.",
      img: "/assets/platos/gofre-pollo-crunchy-queso-feta.webp",
      alt: "Gofre de pollo crujiente con queso feta y cheddar",
      allergens: ["gluten", "sesamo", "lacteo"],
    },
  ],

  hamburguesas: [
    {
      name: "Ternera y buey (200gr)",
      price: "10.50",
      description: "Queso de cabra, cebolla caramelizada, acompañada de papas.",
      img: "/assets/platos/hamburguesa-buey-queso-cabra.webp",
      alt: "Hamburguesa de ternera y buey",
      allergens: ["gluten", "sesamo", "lacteo"],
    },

    {
      name: "Angus (200gr)",
      price: "12.50",
      description:
        "Doble de beicon, queso cheddar, mix de lechugas y cebolla crunchy.",
      img: "/assets/platos/hamburguesa-angus.webp",
      alt: "Hamburguesa de angus",
      allergens: ["gluten", "sesamo", "lacteo", "mostaza"],
    },
  ],

  postres: [
    {
      name: "Tarta de Queso de la Viña",
      price: "4.80",
      description: null,
      img: "/assets/platos/tarta de queso viña.webp",
      alt: "Tarta de queso de la viña",
      allergens: ["lacteo"],
    },

    {
      name: "Coulant de Chocolate con helado de vainilla",
      price: "4.90",
      description: null,
      img: "",
      alt: "Coulant de chocolate con helado de vainilla",
      allergens: ["gluten", "lacteo", "huevo", "cascara"],
    },

    {
      name: "Migas de Chocolate",
      price: "5.50",
      description:
        "Con twist de Baileys y chocolate blanco, y helado de vainilla.",
      img: "/assets/platos/migas-chocolate.webp",
      alt: "Migas de chocolate con twist de baileys y helado de vainilla",
      allergens: ["gluten", "lacteo", "huevo", "cascara"],
    },

    {
      name: "Postre de la semana",
      price: "5.50",
      description: "¡Pregunta por nuestro postre especial de la semana!",
      img: "/assets/platos/postre de la semana.webp",
      alt: "Postre especial de la semana",
      allergens: ["gluten", "lacteo", "huevo", "cascara"],
    },
  ],
};

export const socialNetworks = [
  {
    value: "Instagram",
    color: `bg-instagram`,
    url: "https://www.instagram.com/dgranatapas",
    icon: InstagramIcon
  },

  {
    value: "Facebook",
    color: `bg-blue-500`,
    url: "https://www.facebook.com/dgranatapas",
    icon: FacebookIcon
  },

  {
    value: "Reseñas",
    color: `bg-red-500`,
    url: "https://maps.app.goo.gl/yQ2gJS59mQ1TTJcNA",
    icon: GoogleIcon
  },
];
