import PotionCard from './potionCard';
import { Potion } from '../types/Potion';
import DropDown from './dropdown';
import { useState } from 'react';
import { filterByRarity } from '../helpers/filterByRarity';
import { calculateCraftingTime } from '../helpers/calculateCraftiongTime';
import { findPotionByEffect } from '../helpers/findPotionByEffect';

interface ItemCarouselProps {
  potions: Potion[];
}

const PotionList: React.FC<ItemCarouselProps> = ({
  potions,
}) => {

  const [selectedOption, setSelectedOption] = useState<string | any | null>(null);
  const [time, setTime] = useState<string | any | null>(null);
  const [secondaryEffect, setSecondaryEffect] = useState<string | any | null>(null);

  let filteredPotions = potions

  if (selectedOption === "legendary" || selectedOption === "epic" || selectedOption === "mythic") {
    filteredPotions = filterByRarity(potions, selectedOption)
  }
  console.log(selectedOption);

  const filteredBySecondaryEffect = secondaryEffect;

  if (filteredBySecondaryEffect != "" && filteredBySecondaryEffect != null) {
      filteredPotions = findPotionByEffect(filteredPotions ,filteredBySecondaryEffect)
  }

  const getTime = () => {
    const timeget = calculateCraftingTime(filteredPotions)
    setTime(timeget)
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
      <div className='absolute top-8 grid grid-flow-col auto-cols-max'>
        <div>
          <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900 mx-12">
            search a secondary effect
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              rows={1}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              value={secondaryEffect}
              onChange={e => setSecondaryEffect(e.target.value)}
              
            />
          </div>
        </div>
        <div className='mx-12 my-4'>
          <DropDown
            setSelectedOption={setSelectedOption}>
          </DropDown>
        </div>
        <div className='bottom-16'>
          <button className="bg-black bg-opacity-70 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md 
        hover:bg-neutral-800 hover:bg-opacity-70 border-sepia border-2 mt-2 m-12"
            onClick={getTime}>
            Get Time
          </button>
          {time}
        </div>
      </div>
    </div>
  );
};

export default PotionList;