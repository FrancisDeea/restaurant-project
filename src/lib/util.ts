import { Menu, Plate } from "./definitions";

export const allPlatesInArray = (obj: Menu): Plate[] => {
  let result: Plate[] = [];
  for (let category in obj) {
    obj[category as keyof typeof obj].forEach((item) => result.push(item));
  }
  return result;
};

export const imagesFromMenu = (obj: Menu): string[] => {
  const images: string[] = [];
  const values = Object.values(obj).map((group) => {
    return group.map((plate) => images.push(plate.img));
  });
  return images;
};

export function findAllergens(allergen: string) {
  let src;
  let alt;
  switch (allergen) {
    case "cascara":
      src = "/assets/allergens/nuts.svg";
      alt = "alergeno cascaras y trazas de fruto seco";
      break;
    case "mostaza":
      src = "/assets/allergens/mustard.svg";
      alt = "alergeno mostaza";
      break;
    case "sesamo":
      src = "/assets/allergens/sesame.svg";
      alt = "alergeno sesamo";
      break;
    case "lacteo":
      src = "/assets/allergens/milk.svg";
      alt = "alergeno lacteo";
      break;
    case "sulfito":
      src = "/assets/allergens/sulfites.svg";
      alt = "alergeno sulfitos";
      break;
    case "gluten":
      src = "/assets/allergens/gluten.svg";
      alt = "alergeno gluten";
      break;
    case "soja":
      src = "/assets/allergens/soy.svg";
      alt = "alergeno soja";
      break;
    case "crustaceo":
      src = "/assets/allergens/crustacean.svg";
      alt = "alergeno crustaceo";
      break;
    case "pescado":
      src = "/assets/allergens/fish.svg";
      alt = "alergeno pescado";
      break;
    case "huevo":
      src = "/assets/allergens/egg.svg";
      alt = "alergeno huevo";
      break;
  }

  return {
    src,
    alt,
  };
}

export const urlDasher = (name: string): string => {
  return name.toLowerCase().replaceAll(/\s/g, "-");
};
