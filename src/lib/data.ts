import { FacebookIcon, GoogleIcon, InstagramIcon } from "@/lib/icons"
import { Menu } from "./definitions";

export const menu: Menu = {
  ensaladas: [
    {
      name_es: "Beicon",
      name_en: "Bacon",
      price: "9",
      description_es: "Mix de lechugas, medallón de beicon y queso de cabra, frutos secos y salsa de miel y mostaza.",
      description_en: "Mixed lettuce, bacon and goat cheese medallion, nuts and honey mustard sauce.",
      img: "/assets/platos/ensalada-bacon-queso-cabra.webp",
      alt: "ensalada de bacon y queso de cabra",
      allergens: ["cascara", "mostaza", "sesamo", "lacteo", "sulfito"],
    },

    {
      name_es: "Cesar",
      name_en: "Cesar",
      price: "9",
      description_es: "Mix de lechugas, pollo, picatostes y escamas de parmesano.",
      description_en: "Mix of lettuce, chicken, croutons and parmesan flakes.",
      img: "/assets/platos/ensalada-cesar.webp",
      alt: "ensalada cesar",
      allergens: ["gluten", "lacteo", "sulfito"],
    },
  ],

  entrantes: [
    {
      name_es: "Twister de langostinos",
      name_en: "Prawn Twister",
      price: "8.50",
      description_es: "6 Uds. con salsa sweet chili.",
      description_en: "6 pcs. with sweet chili sauce.",
      img: "/assets/platos/twistter-langostinos-crujientes.webp",
      alt: "twister de langostinos",
      allergens: ["soja", "crustaceo", "pescado", "gluten"],
    },

    {
      name_es: "Lagrimitas de pollo",
      name_en: "Chicken tears",
      price: "9.50",
      description_es: "Con patatas fritas y salsa gaucha argentina.",
      description_en: "With french fries and Argentinean gaucha sauce.",
      img: "/assets/platos/lagrimas-pechuga-pollo.webp",
      alt: "lagrimitas de pollo",
      allergens: ["gluten", "huevo", "mostaza"],
    },

    {
      name_es: "Bravas a la Camboria",
      name_en: "Bravas a la Camboria",
      price: "6",
      description_es: "Papas fritas con salsa brava al estilo de Madrid.",
      description_en: "French fries with salsa brava Madrid style.",
      img: "/assets/platos/patatas-bravas-caseras.webp",
      alt: "papas bravas madrileñas",
      allergens: ["sesamo"],
    },

    {
      name_es: "Roscas",
      name_en: "Roscas",
      price: "9",
      description_es: "De jamón serrano ó de lomo, con tomate y queso.",
      description_en: "Serrano ham or loin, with tomato and cheese.",
      img: "/assets/platos/rosca-jamon-lomo-queso.webp",
      alt: "rosca de jamon o lomo de cerdo",
      allergens: ["gluten", "lacteo"],
    },

    {
      name_es: "Milhojas con fuá de pato y queso de cabra",
      name_en: "Millefeuille with duck and goat cheese fuá",
      price: "10",
      description_es: null,
      description_en: null,
      img: "/assets/platos/milhojas-fua-queso-cabra.webp",
      alt: "Milhojas con fuá de pato y queso de cabra",
      allergens: ["gluten", "lacteo", "huevo"],
    },

    {
      name_es: "Risotto",
      name_en: "Risotto",
      price: "10",
      description_es: "De champiñones, solomillo y parmesano.",
      description_en: "Mushroom, sirloin and parmesan.",
      img: "/assets/platos/risotto-solomillo-setas.webp",
      alt: "risotto de solomillo",
      allergens: ["lacteo", "soja"],
    },

    {
      name_es: "Cazuela de papas gratinadas",
      name_en: "Potato casserole au gratin",
      price: "10",
      description_es: "Papas fritas con mayonesa, beicon y 3 quesos gratinados.",
      description_en: "French fries with mayonnaise, bacon and 3 cheeses au gratin.",
      img: "/assets/platos/cazuela-papas-gratinadas-bacon.webp",
      alt: "cazuela de papas gratinadas con bacon",
      allergens: ["lacteo", "huevo"],
    },
  ],

  principales: [
    {
      name_es: "Croquetas de la casa",
      name_en: "House croquettes",
      price: "10 / 5",
      description_es: "8 / 4 uds. de puchero, rabo de toro ó pollo al curry.",
      description_en: "8 / 4 pcs. of stew, bull's tail or chicken curry.",
      img: "/assets/platos/croquetas-puchero-rabo-toro-curry.webp",
      alt: "croquetas caseras de la casa",
      allergens: ["lacteo", "huevo", "gluten"],
    },

    {
      name_es: "Flamenquín Cordobés",
      name_en: "Cordoban Flamenquín",
      price: "10",
      description_es: "Relleno de lomo, jamón serrano, queso y pimiento.",
      description_en: "Stuffed with loin, serrano ham, cheese and bell pepper.",
      img: "/assets/platos/flamenquin-cordobes-casero.webp",
      alt: "flamenquin cordobes casero",
      allergens: ["lacteo", "huevo", "gluten"],
    },

    {
      name_es: "Cazuela de huevos rotos y virutas de foie",
      name_en: "Casserole of broken eggs and foie shavings",
      price: "10",
      description_es: "Papas panaderas con virutas de jamón serrano y foie.",
      description_en: "Breaded potatoes with shavings of Serrano ham and foie.",
      img: "/assets/platos/cazuela-patatas-gratinadas-bacon.webp",
      alt: "huevos rotos con jamon y foie",
      allergens: ["lacteo", "huevo"],
    },

    {
      name_es: "Tosta de Queso Cabra",
      name_en: "Goat Cheese Toast",
      price: "9.50",
      description_es: "Queso de cabra, cebolla caramelizada y miel de caña.",
      description_en: "Goat cheese, caramelized onion and cane honey.",
      img: "/assets/platos/tosta-queso-cabra-cebolla-caramelizada.webp",
      alt: "tosta de queso de cabra y cebolla caramelizada",
      allergens: ["gluten", "lacteo", "sesamo"],
    },

    {
      name_es: "Tosta de Pulpo",
      name_en: "Octopus Toast",
      price: "11",
      description_es: "Pulpo con pimenton de la Vera, tomate y queso gratinado.",
      description_en: "Octopus with paprika de la Vera, tomato and grilled cheese.",
      img: "/assets/platos/tosta de pulpo tomate y queso.webp",
      alt: "tosta de pulpo, tomate y queso gratinado.",
      allergens: ["gluten", "lacteo", "crustaceo", "pescado", "sesamo"],
    },

    {
      name_es: "Tosta de Alioli Gratinado",
      name_en: "Alioli Gratin Toast",
      price: "8",
      description_es: "Gratinado de alioli, parmesano y 3 quesos.",
      description_en: "Aioli, parmesan and 3 cheeses gratin.",
      img: "/assets/platos/tosta-pan-ajo-queso-cabra.webp",
      alt: "tosta de alioli gratinado, parmesano y tres quesos",
      allergens: ["gluten", "lacteo", "sesamo"],
    },
  ],

  asiaticos: [
    {
      name_es: "Katsu sando D'Graná",
      name_en: "Katsu sando D'Graná",
      price: "14",
      description_es: "Pan brioche, ensalada asiática, crujiente de pollo, mayo kimchi y teriyaki.",
      description_en: "Brioche bread, Asian salad, crispy chicken, kimchi mayo and teriyaki.",
      img: "/assets/platos/katsu-sando-dgrana-2.webp",
      alt: "Sandwich katsu sando d'grana",
      allergens: ["mostaza", "huevo", "gluten", "soja", "sesamo"],
    },

    {
      name_es: "Tartar de Atún en crujiente de arroz",
      name_en: "Tuna Tartar on crispy rice",
      price: "16",
      description_es: "Con emulsión de mango a nuestro estilo, aguacate y alga nori.",
      description_en: "With mango emulsion in our style, avocado and nori seaweed.",
      img: "/assets/platos/tartar atun crujiente arroz.webp",
      alt: "Sandwich katsu sando d'grana",
      allergens: ["lacteo", "pescado", "soja", "sesamo"],
    },

    {
      name_es: "Pollo teriyaki",
      name_en: "Teriyaki chicken",
      price: "11",
      description_es: "Con arroz y salsa sweet chili.",
      description_en: "With rice and sweet chili sauce.",
      img: "/assets/platos/pollo-teriyaki-arroz.webp",
      alt: "pollo teriyaki con arroz",
      allergens: ["lacteo", "huevo", "gluten"],
    },

    {
      name_es: "Bao de solomillo ibérico",
      name_en: "Iberian sirloin Bao bread",
      price: "12",
      description_es: "Con mayokimchi. 3 uds.",
      description_en: "With mayokimchi. 3 pcs.",
      img: "/assets/platos/pan-bao-solomillo.webp",
      alt: "pan bao de solomillo",
      allergens: ["gluten", "huevo"],
    },

    {
      name_es: "Wok de noodles Udon",
      name_en: "Udon noodle wok",
      price: "11",
      description_es: "Pídelos de pollo, gambas ó mixto (+1€)",
      description_en: "Ask for chicken, shrimp or mixed (+1€)",
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
      name_es: "Cazón en adobo frito",
      name_en: "Marinated fried dogfish cubes",
      price: "9.50",
      description_es: null,
      description_en: null,
      img: "/assets/platos/cazon-frito-adobo.webp",
      alt: "cazon frito en adobo",
      allergens: ["gluten", "pescado", "sulfito"],
    },

    {
      name_es: "Almejas a la marinera",
      name_en: "Clams marnière",
      price: "10.50",
      description_es: null,
      description_en: null,
      img: "/assets/platos/almejas-marinera.webp",
      alt: "almejas a la marinera",
      allergens: ["crustaceo", "sulfito"],
    },

    {
      name_es: "Pata de pulpo",
      name_en: "Octopus leg",
      price: "14.50",
      description_es: "Pata de pulpo salteada, cremoso de romesco y alioli de pimentón de La Vera.",
      description_en: "Octopues leg over romesco sauce with garlic and paprika mayonnaise.",
      img: "/assets/platos/pata-pulpo-salsa-romesco.webp",
      alt: "pata de pulpo a la plancha con romesco",
      allergens: ["cascara", "sesamo", "sulfito", "pescado"],
    },
  ],

  exigentes: [
    {
      name_es: "Pluma ibérica BT",
      name_en: "Iberian pork LT",
      price: "15",
      description_es: "Cocinada a baja temperatura, con jamón serrano y aceite trufado.",
      description_en: "Cooked at low temperature, with serrano ham, truffle oil and baked potatoes.",
      img: "/assets/platos/pluma-iberica-baja-temperatura.webp",
      alt: "pluma iberica a baja temperatura con patatas",
      allergens: null,
    },

    {
      name_es: "Costillas de cerdo BBQ",
      name_en: "BBQ pork ribs",
      price: "15",
      description_es: "Cocinadas a baja temperatura con salsa bbq y papas.",
      description_en: "Cooked at low temperature with BBQ sauce and potatoes.",
      img: "/assets/platos/costilla-cerdo-bbq.webp",
      alt: "costillas de cerdo barbacoa",
      allergens: ["sesamo"],
    },

    {
      name_es: "Milhojas",
      name_en: "Millefeuilles",
      price: "10",
      description_es: "Con queso de cabra, jamón serrano y confitura de mango.",
      description_en: "With goat cheese, serrano ham and mango jam.",
      img: "/assets/platos/milhojas-queso-cabra-mango.webp",
      alt: "milhojas de queso cabra, mango y jamon",
      allergens: ["gluten", "lacteo"],
    },

    {
      name_es: "Sacos de calabacín",
      name_en: "Zucchini packets",
      price: "9",
      description_es: "Rellenos de bechamel de puerros y boletus.",
      description_en: "Filled with leek bechamel and boletus",
      img: "/assets/platos/sacos de calabacin con bechamel de puerros y boletos.webp",
      alt: "sacos de calabacin rellenos",
      allergens: ["huevo", "lacteo"],
    },

    {
      name_es: "Gofre de pollo Crunchy",
      name_en: "Crunchy chicken Waffle",
      price: "10.50",
      description_es: "Con queso americano cheddar, feta, mezclum y aove trufado.",
      description_en: "With American cheese, feta, mezclum and truffled olive oil.",
      img: "/assets/platos/gofre-pollo-crunchy-queso-feta.webp",
      alt: "Gofre de pollo crujiente con queso feta y cheddar",
      allergens: ["gluten", "sesamo", "lacteo"],
    },
  ],

  hamburguesas: [
    {
      name_es: "Ternera y buey (200gr)",
      name_en: "Beef (200gr)",
      price: "10.50",
      description_es: "Queso de cabra, cebolla caramelizada, acompañada de papas.",
      description_en: "Goat cheese, caramelized onion, accompanied by potatoes.",
      img: "/assets/platos/hamburguesa-buey-queso-cabra.webp",
      alt: "Hamburguesa de ternera y buey",
      allergens: ["gluten", "sesamo", "lacteo"],
    },

    {
      name_es: "Angus (200gr)",
      name_en: "Angus (200gr)",
      price: "12.50",
      description_es: "Doble de beicon, queso cheddar, mix de lechugas y cebolla crunchy.",
      description_en: "Double bacon, Cheddar cheese, Mix of lettuce and crunchy onion.",
      img: "/assets/platos/hamburguesa-angus.webp",
      alt: "Hamburguesa de angus",
      allergens: ["gluten", "sesamo", "lacteo", "mostaza"],
    },
  ],

  postres: [
    {
      name_es: "Tarta de Queso de la Viña",
      name_en: "Baked Cheesecake",
      price: "4.80",
      description_es: null,
      description_en: null,
      img: "/assets/platos/tarta de queso viña.webp",
      alt: "Tarta de queso de la viña",
      allergens: ["lacteo"],
    },

    {
      name_es: "Coulant de Chocolate con helado de vainilla",
      name_en: "Chocolate Coulant with vanilla ice cream",
      price: "4.90",
      description_es: null,
      description_en: null,
      img: "",
      alt: "Coulant de chocolate con helado de vainilla",
      allergens: ["gluten", "lacteo", "huevo", "cascara"],
    },

    {
      name_es: "Migas de Chocolate",
      name_en: "Chocolate Crumbs",
      price: "5.50",
      description_es: "Con twist de Baileys y chocolate blanco, y helado de vainilla.",
      description_en: "With Baileys and white chocolate twist, and vanilla ice cream.",
      img: "/assets/platos/migas-chocolate.webp",
      alt: "Migas de chocolate con twist de baileys y helado de vainilla",
      allergens: ["gluten", "lacteo", "huevo", "cascara"],
    },

    {
      name_es: "Postre de la semana",
      name_en: "Homemade Dessert of the week",
      price: "5.50",
      description_es: "¡Pregunta por nuestro postre especial de la semana!",
      description_en: "Ask for our special dessert of the week!",
      img: "/assets/platos/postre de la semana.webp",
      alt: "Postre especial de la semana",
      allergens: ["gluten", "lacteo", "huevo", "cascara"],
    },
  ],
};

export const socialNetworks = [
  {
    value_es: "Instagram",
    value_en: "Instagram",
    color: `bg-instagram`,
    url: "https://www.instagram.com/dgranatapas",
    icon: InstagramIcon
  },

  {
    value_es: "Facebook",
    value_en: "Facebook",
    color: `bg-blue-500`,
    url: "https://www.facebook.com/dgranatapas",
    icon: FacebookIcon
  },

  {
    value_es: "Reseñas",
    value_en: "Reviews",
    color: `bg-red-500`,
    url: "https://maps.app.goo.gl/yQ2gJS59mQ1TTJcNA",
    icon: GoogleIcon
  },
];
