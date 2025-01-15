import { Potion } from "../types/Potion";

//FUNCIOIN QUE DEVUELVE LAS POCIONES CON UN EFECTO SECUNDARIO ESPECIFICO
export function findPotionByEffect(potions: Potion[], secondaryEffect: string) {
    const filteredPotionArray = [];
    let counter = 0;
    for (let i = 0; i < potions.length; i++) {
        for (let j = 0; j < potions[i].effects.secondary.length; j++) {
            if (potions[i].effects.secondary[j].attribute === secondaryEffect) {
                filteredPotionArray[counter] = potions[i];
                counter += 1;
            }
        }
    }
    return filteredPotionArray;
}