import { Potion } from "../types/Potion";

//FUNCIOIN QUE DEVUELVE LAS POCIONES DE UNA RAREZA EN ESPECIFICO
export function filterByRarity(potions: Potion[], rarity: string) {
    const filteredPotionArray = [];
    let counter = 0;
    for (let i = 0; i < potions.length; i++) {
        if (potions[i].rarity === rarity) {
            filteredPotionArray[counter] = potions[i];
            counter += 1;
        }
    }
    return filteredPotionArray;
}