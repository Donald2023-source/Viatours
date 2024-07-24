import { trendingData } from "../data/Trending"

const Trending = () => {
    return (
        <>
        <div>
            <span className="flex justify-between px-1 lg:px-24 py-8">
                <h2 className="text-2xl text-mainColor font-semibold">Trending Destinations</h2>
                    <text>See All</text>
            </span>
            <div className="lg:flex flex-wrap grid grid-cols-3 justify-center gap-10">
                {trendingData.map((data, id) => (
                    <div className="flex flex-col gap-2 items-left" key={id}>
                        <img src={data.img} alt="" />
                        <h2 className="font-semibold">{data.name}</h2>
                        <p className="font-light text-sm">100 + Tours</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default Trending