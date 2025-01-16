import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

interface DropDownProps {
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const DropDown: React.FC<DropDownProps> = ({
    setSelectedOption
}) => {
    const setSelectedLegendary = () => {
        setSelectedOption("legendary");
        
    };
    const setSelectedMythic = () => {
        setSelectedOption("mythic");
        
    };
    const setSelectedEpic = () => {
        setSelectedOption("epic");
        
    };
    const setSelectedaAll = () => {
        setSelectedOption("");
    };
    
    
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Select rarity ▼
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <a
                            onClick={setSelectedMythic}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                            Mythic
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            onClick={setSelectedEpic}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                            Epic
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            onClick={setSelectedLegendary}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                            Legendary
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            onClick={setSelectedaAll}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                            All
                        </a>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    )
}

export default DropDown