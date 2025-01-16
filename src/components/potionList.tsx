import PotionCard from './potionCard';
import { Potion } from '../types/Potion';
import DropDown from './dropdown';
import { useState } from 'react';
import { filterByRarity } from '../helpers/filterByRarity';
import { calculateCraftingTime } from '../helpers/calculateCraftiongTime';

interface ItemCarouselProps {
  potions: Potion[];
}

const PotionList: React.FC<ItemCarouselProps> = ({
  potions,
}) => {

  const [selectedOption, setSelectedOption] = useState<string | any | null>(null);
  let filteredPotions = potions
  if (selectedOption === "legendary" || selectedOption === "epic" || selectedOption === "mythic") {
    filteredPotions = filterByRarity(potions, selectedOption)
  }
  console.log(selectedOption);
  

  const getTime = () => {
    calculateCraftingTime(filteredPotions)
  };

  const PotionsPerRow = filteredPotions.length;
  const startIndex = 0;
  const potionsToDisplay = filteredPotions.slice(startIndex, PotionsPerRow);

  return (
    <div className='w-full rounded-3xl fixed inset-0 z-50 flex items-center justify-center'>
      {potionsToDisplay.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {potionsToDisplay.map((potion: Potion) => (
            <div>
              <PotionCard
                potion={potion}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No potions available.</p>
      )}
      <div className='absolute top-8'>
        <div className='bottom-16'>
          <DropDown
            setSelectedOption={setSelectedOption}>
          </DropDown>
        </div>
        <div className='bottom-16'>
          <button
          onClick={getTime}>

          </button>
        </div>
      </div>
    </div>
  );
};

export default PotionList;