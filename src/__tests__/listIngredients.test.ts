import { potions } from "../data/data";
import { listIngredients } from "../helpers/listIngredients";

//LE PASO UNA POCION EN ESPECIFICO PARA HECER LA COMPROBACION
describe('Get the ingredients of a especific potion', () => {
	it('should get correcty the ingredients if I use 5th potion', () => {
		const result = listIngredients(potions[4])

        expect(result[0]).toBe("Arcane Crystal");
        expect(result[1]).toBe("Enchanted Powder")
        expect(result[2]).toBe("Moonlit Dew")
        //AÑADO ESTA LINEA PARA COMPROBAR QUE NO HAY MAS
        expect(result[3]).toBe(undefined)
	})
})
