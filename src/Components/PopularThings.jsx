import { popularThingsData } from "../data/popularThingsdata"

const PopularThings = () => {
    return (
        <>
        <div className="flex flex-wrap justify-around items-center gap-1 py-10 bg-[#ffa6001a]">
            <div className="lg:w-[30%] md:w-[70%] lg:text-left text-center flex flex-col gap-8">
                <h2 className="font-semibold text-2xl text-mainColor">Popular Things to do</h2>
                <p className="leading-9">There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form.</p>
                <button className="p-3 rounded-lg lg:mx-0 mx-auto bg-orange text-white">See All</button>
            </div>

            <div className="grid lg:grid-cols-3 lg:py-0 md:py-6 py-6 md:grid-cols-3 grid-cols-2 gap-14">
                {popularThingsData.map((data, id) => (
                    <div className="bg-white py-4 px-10 rounded-lg flex flex-col items-center gap-2" key={id}>
                        <img src={data.img} alt="" />
                        <text className="font-semibold">{data.name}</text>
                        <p className="text-sm">{data.text}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
export default PopularThings