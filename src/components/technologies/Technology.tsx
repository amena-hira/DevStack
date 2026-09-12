import { FaStar } from "react-icons/fa";
import type { TechnologyType } from "../../types/TechnologyType";

const Technology = ({ technology }: { technology: TechnologyType }) => {
    return (
        <div className="card bg-base-100 shadow-sm border-[#F1F5F9]">
            <div className="card-body">
                <div className="flex justify-between">
                    <img src={technology.icon} alt={technology.name} className="w-10 h-10" />
                    <span className={`badge badge-sm border-0 ${technology.badgeColor}`}>
                        {technology.badge}
                    </span>
                </div>
                <h2 className="card-title">{technology.name}</h2>
                <p>{technology.description}</p>
                <div className="divider my-0"></div>
                <div className="flex items-center">
                    <button className="btn btn-xs bg-[#F1F5F9] border-[#F1F5F9] text-[#475569]">{technology.category}</button>
                    <p className="text-sm text-center text-[#64748B]">{technology.difficulty}</p>
                    <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500"></FaStar>
                        <span className="text-[#334155]">{technology.rating}</span>
                    </div>
                </div>
                <button className="btn btn-block rounded-lg bg-black text-white">Add to Stack</button>
            </div>
        </div>
    );
};

export default Technology;