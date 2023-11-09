import { Menu } from "./definitions"

export const imagesFromMenu = (obj: Menu): string[] => {
    const images: string[] = []
    const values = Object.values(obj).map(group => {
        return group.map(plate => images.push(plate.img))
    })
    return images
}