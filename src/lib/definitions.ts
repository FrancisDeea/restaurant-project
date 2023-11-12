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
  name: string;
  price: string;
  description: string | null;
  img: string;
  alt: string;
  allergens: string[] | null;
}

export type Menu = Record<FoodCategory, Plate[]>