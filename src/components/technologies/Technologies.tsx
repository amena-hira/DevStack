import { use } from 'react';
import type { TechnologyType } from '../../types/TechnologyType';
import Technology from './Technology';
import Stack from './Stack';

interface TechnologiesProps {
    technologiesPromise: Promise<TechnologyType[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise)
    return (
        <div className="container mx-auto my-10 space-y-2 px-2 lg:px-0">
            <div>
                <h2 className="text-2xl lg:text-4xl font-extrabold text-[#0F172A] text-center lg:text-left">Explore the <span className="text-linear-gradient">Technologies</span></h2>
                <p className="text-[#64748bFF] py-2 text-center lg:text-left text-xs lg:text-base">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 items-start">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:col-span-3'>
                    {
                        technologies.map((technology: TechnologyType) => {
                            return <Technology key={technology.id} technology={technology} />
                        })
                    }
                </div>
                <div>
                    <Stack></Stack>
                </div>

            </div>

        </div>
    );
};

export default Technologies;