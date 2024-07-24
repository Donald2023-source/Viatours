import { Bestdata } from "../data/Best"
const Best = () => {
    return (
        <>
        <div>
          <section>
            <h2 className='text-mainColor font-bold text-3xl text-center lg:text-left lg:ml-44 py-2'>Best Of <span className="text-faintText">New York</span></h2>
                <div>
                    <div className="flex flex-wrap items-center gap-16 justify-center">
                        {Bestdata.map((data, id) => (
                            <div key={id}>
                            <div className="w-72 flex flex-col shadow-md p-2 rounded">
                                 <img className="rounded-t-xl" src={data.img} alt="" />
                                    <span>
                                        <h2 className="text-faintText ml-4 py-2">New York USA</h2>
                                            <text className="text-mainColor font-semibold py-2">{data.name}</text>
                                                <center className="py-2">{data.rating}</center>
                                                    <hr />
                                                       <span className="flex items-center justify-between py-2">
                                                            <text className="text-mainColor font-semibold">{data.days} days</text>
                                                            <text className="text-mainColor font-semibold">from${data.price}</text>
                                                       </span>
                                    </span>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
          </section>
        </div>
        </>
    )
}
export default Best