export interface Dict {
  homeSection: HomeSection;
  contactSection: ContactSection;
  dinamicTextSection: DinamicTextSection;
  navLinks: NavLinks;
  categories: Categories;
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
