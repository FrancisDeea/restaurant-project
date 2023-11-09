import { menu } from "./data";
import { imagesFromMenu } from "./util";

export const getAllMenu = () => {
  return menu;
};

export const getGallery = () => {
  const images = imagesFromMenu(menu)
  return images
};
