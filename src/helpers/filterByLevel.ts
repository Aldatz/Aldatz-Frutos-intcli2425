import { Potion } from "../types/Potion";

//FUNCION QUE MIRE EL NIVEL QUE YO SELECCIONE Y FILTRAR PARA ABAJO
export function filterByLevelRequirement(potions: Potion[], levelRequirement: number) {
    const filteredPotionArray = [];
    let counter = 0;
    for (let i = 0; i < potions.length; i++) {
        if (potions[i].usage.restrictions.levelRequirement <= levelRequirement) {
            filteredPotionArray[counter] = potions[i];
            counter += 1;
        }
    }
    return filteredPotionArray;
}