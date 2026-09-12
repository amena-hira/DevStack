import banner from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between items-center rounded-lg container mx-auto my-18 lg:my-20">
                <div className="space-y-6 text-center lg:text-left lg:w-6/12 px-2 lg:px-0">
                    <h2 className="text-3xl lg:text-6xl font-extrabold">
                        <span>Build Your Ideal</span> <br />
                        <span className="text-linear-gradient">Development Stack</span>

                    </h2>
                    <p className="tlg:text-lg w-full lg:w-10/12">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>
                    <div className="flex flex-row gap-3">
                        <button className="btn flex-1 lg:flex-none lg:w-48 background-linear-gradient text-white border-0 text-xs lg:text-sm rounded-xl">
                            Explore Technologies
                        </button>

                        <button className="btn btn-outline flex-1 border-[#e5e7eb] text-[#374151] lg:flex-none lg:w-48 text-xs lg:text-sm rounded-xl">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="">
                    <img src={banner} alt="Banner" />
                </div>

            </div>

        </>
    );
};

export default Banner;