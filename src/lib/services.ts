import { menu } from "./data";
import { imagesFromMenu } from "./util";

export const getAllMenu = () => {
  return menu;
};

export const getMenuByCategory = (category: string) => {
  return menu[category as keyof typeof menu]
}

export const getNamesInCategory = (category: string) => {
  return menu[category as keyof typeof menu].map(plate => plate.name)
}

export const getGallery = () => {
  const images = imagesFromMenu(menu)
  return images.slice(0, 15)
};
