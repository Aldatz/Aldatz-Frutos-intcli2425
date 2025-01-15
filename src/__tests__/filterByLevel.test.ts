import { potions } from "../data/data";
import { filterByLevelRequirement } from "../helpers/filterByLevel";

//LE PASO LA DATA DE POCIONES Y ELIJO UN NIVEL Y HAGO QUE ME DEVUELVA EL NOMBRE Y EL NIVEL REQUERIDO PARA HACER LA COMPROBACION
describe('Filter the potions by usage required level', () => {
	it('should filter correctly the potions by level "15"', () => {
		const filterPotions = filterByLevelRequirement(potions, 15)
        const resultName = []
        const resultLevel = []
        for (let i = 0; i < filterPotions.length; i++) {
            resultName[i] = filterPotions[i].name;
            resultLevel[i] = filterPotions[i].usage.restrictions.levelRequirement;
        }
        expect(resultName[0] + " " + resultLevel[0]).toBe("Elixir of Eternal Flame 15");
        expect(resultName[1] + " " + resultLevel[1]).toBe("Elixir of Acolyte Terror 12");
        expect(resultName[2] + " " + resultLevel[2]).toBe("Essence of Eternal Vitality 15");
        //AÑADO ESTA LINEA PARA COMPROBAR QUE NO HAY MAS
        expect(resultName[3] + " " + resultLevel[3]).toBe(undefined + " " + undefined);
	})
})
