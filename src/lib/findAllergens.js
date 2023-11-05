export function findAllergens(allergen) {
    let src;
    let alt;
    switch (allergen) {
        case "cascara":
            src = "/assets/allergens/nuts.svg";
            alt = "alergeno cascaras y trazas de fruto seco"
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

    return ({
        src, alt
    })
}