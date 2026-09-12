import { RxCross1 } from "react-icons/rx";
import type { TechnologyType } from "../../types/TechnologyType";
import type { Dispatch, SetStateAction } from "react";

interface stackCardProps {
    stack: TechnologyType,
    setStacks: Dispatch<SetStateAction<TechnologyType[]>>
}
const StackCard = ({ stack, setStacks }: stackCardProps) => {
    const handleRemoveStacks = () =>{
        setStacks((prevStacks) => prevStacks.filter(s=> s.name !== stack.name))
    }
    return (
        <div className="flex justify-between items-center my-4 border border-[#E2E8F0] rounded-lg p-2.5">
            <div className="flex gap-2 items-center">
                <img className="w-7 h-7" src={stack.icon} alt={stack.name} />
                <div>
                    <h2 className="font-bold text-xs">{stack.name}</h2>
                    <p className="text-[8px]">{stack.category}</p>
                </div>
            </div>
            <button className="btn btn-ghost btn-xs" onClick={()=>handleRemoveStacks()}>
                <RxCross1 className="text-[#94A3B8] text-xl" />
            </button>
        </div>
    );
};

export default StackCard;