import React from "react";
import { Potion } from "../types/Potion";

interface ItemCardProps {
  potion: Potion;
}

const PotionCard: React.FC<ItemCardProps> = ({
  potion,
}) => {
  return (
    <>
      <div
        className="relative w-full h-auto p-4 bg-black/60 border border-gold text-gray-200 rounded shadow-md cursor-pointer 
                   hover:scale-[1.02] transition-transform duration-200 flex flex-col potions-center justify-start items-center rounded-lg"
      >
        <img
          src={potion.image}
          alt={potion.name}
          className="w-24 h-24 mb-2 object-contain rounded-lg"
        />
        <strong className="text-gray-200 text-center text-base font-semibold px-2 truncate w-full">
          {potion.name}
        </strong>
        <strong className="text-gray-200 text-center text-base font-semibold px-2 truncate w-full">
          {potion.rarity}
        </strong>
        <strong className="text-gray-200 text-center text-base font-semibold px-2 truncate w-full">
          {potion.meta.availability.drop_rate.boss}
        </strong>
        <strong className="text-gray-200 text-center text-base font-semibold px-2 truncate w-full">
          {potion.meta.availability.drop_rate.chance}
        </strong>

        <button>
            
        </button>
      </div>
    </>
  );
};

export default PotionCard;
