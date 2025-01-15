import { Potion } from "../types/Potion";

//FUNCIOIN QUE DEVUELVE LOS NOMBRES DE LOS INGREDIENTES DE UNA POCION EN ESPECIFUCO
export function listIngredients(potions: Potion) {
    const ingredients = [];
    for (let i = 0; i < potions.ingredients.length; i++) {
        ingredients[i] = potions.ingredients[i].name;
    }
    return ingredients;
}