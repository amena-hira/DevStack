import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../types/TechnologyType";
import StackCard from "./StackCard";

interface stackProps {
    stacks: TechnologyType[],
    setStacks: Dispatch<SetStateAction<TechnologyType[]>>
}

const Stack = ({ stacks, setStacks }: stackProps) => {
    return (
        <div className="card shadow-md">
            <div className="card-body">
                <h2 className="text-base text-[#0F172A] font-bold">Your Stack</h2>
                <p className="text-xs text-[#94A3B8]">{stacks.length===0? "No technologies selected yet.": `${stacks.length} Technology Selected`} </p>
                <div>
                    {
                        stacks.length === 0 ?
                            <div className="border border-[#E2E8F0] border-dashed rounded-xl text-center px-6 py-6 text-[#94A3B8] text-xs mt-4">Your stack is empty</div>
                            :
                            stacks.map((stack: TechnologyType) => {
                                return <StackCard key={stack.id} stack={stack} setStacks={setStacks} />
                            })
                    }

                </div>
                <button onClick={() => setStacks([])} className="btn btn-block rounded-xl bg-white border-[#ED8C85] text-[#D82C20] hover:shadow-sm hover:shadow-[#ED8C85]">Remove All</button>
            </div>

        </div>
    );
};

export default Stack;