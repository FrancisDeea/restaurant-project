export type FoodCategory =
  | "ensaladas"
  | "entrantes"
  | "principales"
  | "asiaticos"
  | "pescados"
  | "exigentes"
  | "hamburguesas"
  | "postres";

export interface Plate {
  name_es: string;
  name_en: string;
  price: string;
  description_es: string | null;
  description_en: string | null;
  img: string;
  alt: string;
  allergens: string[] | null;
}

export type Menu = Record<FoodCategory, Plate[]>