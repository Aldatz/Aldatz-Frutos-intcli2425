import { potions } from "../data/data";
import { listIngredients } from "../helpers/getOnePotionIngredients";

//LE PASO LA DATA DE POCIONES Y ELIJO UN NUMERO DE NIVEL LUEGO HAGO QUE ME DEVUELVA SOLO EL NOMBRE PARA HACER LA COMPROBACION
describe('Filter the potions by usage required level', () => {
	it('should filter correctly the potions', () => {
		const result = listIngredients(potions[4])

        expect(result[0]).toBe("Arcane Crystal");
        expect(result[1]).toBe("Enchanted Powder")
        expect(result[2]).toBe("Moonlit Dew")
        expect(result[3]).toBe(undefined)
	})
})
