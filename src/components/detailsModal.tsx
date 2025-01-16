import { Ingredient } from "../types/Ingredient";
import { Potion } from "../types/Potion";
import { SecondaryEffect } from "../types/SecondaryEffect";

interface PotionDetailModalProps {
    potion: Potion;
    closeModal: () => void;
}
// ELEMENTO A AÑADIR
// TODOS LOS EFFECTOS DE LA POTI
// LOS INGREDIENTES Y DONDE SE CONSIGUEN
// REQUISITOS DE USO 
// LOS WARNINGS DE LA POTI
// TIEMPO DE CREACION E INSTRUCCIONES DE USO
const PotionDetailModal: React.FC<PotionDetailModalProps> = ({
    potion,
    closeModal
}) => {
    return (
        <div className="w-full rounded-3xl fixed inset-0 z-50 flex items-center justify-center">
            <div className="w-[90%] h-[90%] rounded-3xl inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 ">
                <button
                    onClick={closeModal}
                    className="absolute top-10 right-28 text-white text-xl font-bold mt-8 bg-black bg-opacity-70 rounded-full px-3 py-1 hover:bg-opacity-90 border-2 border-sepia"
                >
                    X
                </button>
                <ul className="m-12">
                    <li><p className="mb-4 text-3xl text-white leading-4 font-bold mt-8">Effects:</p></li>
                    <li><p className="mb-4 text-xl text-white leading-4">{potion.effects.primary.attribute + ": " + potion.effects.primary.duration.amount + " " + potion.effects.primary.duration.unit}</p></li>
                    {potion.effects.secondary.map((secondary: SecondaryEffect) => (
                        <li><p className="mb-4 text-xl text-white leading-4">{secondary.attribute + ": " + secondary.duration.amount + " " + secondary.duration.unit}</p></li>
                    ))}

                    <li><p className="mb-4 text-3xl text-white leading-4 font-bold mt-8">Ingredients:</p></li>
                    {potion.ingredients.map((ingredients: Ingredient) => (
                        <li><p className="mb-4 text-xl text-white leading-4">{ingredients.name + ": " + ingredients.origin.region + ", " + ingredients.origin.location}</p></li>
                    ))}
                    
                    <li><p className="mb-4 text-3xl text-white leading-4 font-bold mt-8">Requirements:</p></li>
                    <li><p className="mb-4 text-xl text-white leading-4">Required level: {potion.usage.restrictions.levelRequirement}</p></li>
                    <li><p className="mb-4 text-xl text-white leading-4">Class:
                        {potion.usage.restrictions.classRestrictions.map((classRestrictions: string) => (
                            classRestrictions + ", "
                        ))}
                   </p></li>
               
                    <li><p className="mb-4 text-3xl text-white leading-4 font-bold mt-8">Warnings:</p></li>
                    {potion.usage.restrictions.warnings.map((warnings: string) => (
                        <li><p className="mb-4 text-xl text-white leading-4">{warnings}</p></li>
                    ))}

                    <li><p className="mb-4 text-3xl text-white leading-4 font-bold mt-8">Creation time: </p></li>
                    <li><p className="mb-4 text-xl text-white leading-4">{potion.crafting.time.amount + " " + potion.crafting.time.unit}</p></li>

                    <li><p className="mb-4 text-3xl text-white leading-4 font-bold mt-8">Instuctions:</p></li>
                    {potion.usage.instructions.map((instructions: string) => (
                        <li><p className="mb-4 text-xl text-white leading-4">{instructions}</p></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PotionDetailModal;
