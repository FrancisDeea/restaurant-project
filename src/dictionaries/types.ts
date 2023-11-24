export interface Dict {
  homeSection: HomeSection;
  contactSection: ContactSection;
  dinamicTextSection: DinamicTextSection;
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
    text1: string
    text2: string
    text3: string
    text4: string
  }
