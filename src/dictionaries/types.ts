export interface Dict {
  homeSection: HomeSection;
  contactSection: ContactSection;
  dinamicTextSection: DinamicTextSection;
  navLinks: NavLinks;
  categories: Categories;
  drinkSection: DrinkSection;
  alergenos: Others;
}

export interface HomeSection {
  subtitle: string;
  description: string;
  button: string;
}

export interface ContactSection {
  title: string;
  time1: string;
  time2: string;
}

export interface DinamicTextSection {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

export interface NavLinks {
  bienvenido: string;
  home: string;
  carta: string;
  contacto: string;
  sorprendeme: string;
}

export interface Categories {
  title: string;
  subtitle: string;
  ensaladas: string;
  entrantes: string;
  principales: string;
  asiaticos: string;
  pescados: string;
  exigentes: string;
  hamburguesas: string;
  postres: string;
  bebidas: string;
}

export interface DrinkSection {
  title: string;
  refrescos: string;
  fanta: string;
  nestea: string;
  tonica: string;
  tinto_verano_1: string;
  tinto_verano_2: string;
  tinto_verano_3: string;
  vino_tinto: string;
  vino_blanco: string;
  cerveza_grifo: string;
  caña: string;
  copa: string;
  pinta: string;
  radler: string;
  bottle: string;
  gluten: string;
  copas: string;
  cafe: string;
  cafe_tipos: string;
  bombon: string;
  te: string;
}

export interface Others {
  alergenos: string;
  añadir: string;
}