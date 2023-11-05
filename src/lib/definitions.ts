export type FoodCategory =
  | "salads"
  | "snacks"
  | "dishes"
  | "asian"
  | "fishes"
  | "demanding"
  | "burguers"
  | "desserts";

export interface Plate {
  name: string;
  price: string;
  description: string | null;
  img: string;
  alt: string;
  allergens: string[] | null;
}

export type Menu = Record<FoodCategory, Plate[]>