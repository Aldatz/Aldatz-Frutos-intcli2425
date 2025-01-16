import React, { useState } from "react";
import { Potion } from "../types/Potion";
import PotionDetailModal from "./detailsModal";

interface ItemCardProps {
  potion: Potion;
}

const PotionCard: React.FC<ItemCardProps> = ({
  potion
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <div
        className="relative w-full h-auto p-4 bg-black/60 border border-gold text-gray-200 shadow-md cursor-pointer 
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

        <button className="bg-black bg-opacity-70 text-white text-xl font-semibold py-2 px-4 rounded-lg shadow-md 
        hover:bg-neutral-800 hover:bg-opacity-70 border-sepia border-2 mt-2"
          onClick={openModal}>
            View details
        </button>
      </div>
      {isModalOpen && (
        <PotionDetailModal
          potion={potion}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default PotionCard;
