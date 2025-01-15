import { potions } from "../data/data";   
import { findPotionByEffect } from "../helpers/findPotionByEffect";

//LE PASO LA DATA DE POCIONES Y ELIJO UN EFFECTO SECUNDARIO LUEGO DEVUELVO EL NOMBRE Y EL EFFECTO PARA HACER LA COMPROBACION
describe('Filter the potions by usage a specific secondary effect', () => {
	it('should filter correctly the potions using "stealth"', () => {
		const filterPotions = findPotionByEffect(potions, "stealth")
        const resultName = []
        const resultSecondaryEffect = []
        for (let i = 0; i < filterPotions.length; i++) {
            resultName[i] = filterPotions[i].name;
            for (let j = 0; j < filterPotions[i].effects.secondary.length; j++) {
                resultSecondaryEffect[i] = filterPotions[i].effects.secondary[j].attribute;
            }
            
        }
        expect(resultName[0] + " " + resultSecondaryEffect[0]).toBe("Elixir of Shadows stealth");
        expect(resultName[1] + " " + resultSecondaryEffect[1]).toBe(undefined + " " + undefined);
	})
})
