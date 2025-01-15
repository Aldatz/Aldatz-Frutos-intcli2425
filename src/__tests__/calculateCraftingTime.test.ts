import { potions } from "../data/data";
import { calculateCraftingTime } from "../helpers/calculateCraftiongTime";

//LE PASO UNAS CUANTAS POCIONES PARA HECER LA COMPROBACION
describe('Get the ingredients of a especific potion', () => {
	it('should get correcty the ingredients if I use 5th potion', () => {
        const selectedPotions = [potions[1], potions[1], potions[5], potions[9]]
		const result = calculateCraftingTime(selectedPotions)

        expect(result[0] + ", " + result[1]).toBe("7 hours" + ", " + "45 minutes");
	})
})
