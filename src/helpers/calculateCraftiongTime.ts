import { Potion } from "../types/Potion";

//FUNCION QUE CALCULA EL TIEMPO PARA QUE SE PREPAREN LAS POCIONES QUE HAS SELECCIONADO
export function filterByLevelRequirement(potions: Potion[]) {
    let minutes = 0;
    let hours = 0;
    let totalTime = [];
    for (let i = 0; i < potions.length; i++) {
        if (potions[i].crafting.time.unit === "minutes") {
            minutes += potions[i].crafting.time.amount;
        }
        else {
            hours += potions[i].crafting.time.amount;
        }
    }
    while (minutes >= 60) {
        minutes -= 60;
        hours += 1;
    }
    totalTime = [hours, minutes];
}