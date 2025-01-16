import React, { useState } from 'react';
import PotionCard from './potionCard';
import { Potion } from '../types/Potion';

interface ItemCarouselProps {
  potions: Potion[];
}

const PotionList: React.FC<ItemCarouselProps> = ({
    potions,
}) => {

  const PotionsPerRow = potions.length;
  const startIndex = 0;
  const potionsToDisplay = potions.slice(startIndex, PotionsPerRow);

  return (
    <div>
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
    </div>
  );
};

export default PotionList;