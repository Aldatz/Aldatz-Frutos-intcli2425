import { potions } from "../data/data";   
import { filterByRarity } from "../helpers/filterByRarity";

//LE PASO LA DATA DE POCIONES Y ELIJO UNA RAREZA LUEGO HAGO QUE ME DEVUELVA SOLO EL NOMBRE PARA HACER LA COMPROBACION
describe('Filter the potions by selected rarity', () => {
	it('should filter correctly the potions by "legendary"', () => {
		const filterPotions = filterByRarity(potions, "legendary")
        const resultName = []
        for (let i = 0; i < filterPotions.length; i++) {
            resultName[i] = filterPotions[i].name;
        }
        expect(resultName[0]).toBe("Elixir of Eternal Flame");
        expect(resultName[1]).toBe("Essence of Frostbound Will");
        expect(resultName[2]).toBe("Elixir of Acolyte Terror");
        expect(resultName[3]).toBe("Vial of Shifting Shadows");
        expect(resultName[4]).toBe("Elixir of Arcane Surge");
        expect(resultName[5]).toBe("Elixir of Shadows");
        //AÑADO ESTA LINEA PARA COMPROBAR QUE NO HAY MAS
        expect(resultName[6]).toBe(undefined);
	})
})
