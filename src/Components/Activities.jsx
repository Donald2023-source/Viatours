import activity1 from '../assets/png/activity1.png'
import activity2 from '../assets/png/activity2.png'
import activity3 from '../assets/png/activity3.png'
const Activity = () => {
    return (
        <>
        <div>
            <section className='flex justify-center gap-14 flex-wrap mt-32'>
                <div className='relative'>
                    <img src={activity1} alt="" />
                        <div className='bg-mainColor h-[21.8rem] opacity-60 absolute top-0 w-[25.6rem] rounded-xl'/>  
                             <div className='absolute flex flex-col gap-24 top-0 ml-8 py-10'>
                                 <span className='flex flex-col gap-3'>
                                     <h2 className='text-white'>Enjoy these cool staycation promotions.</h2>
                                         <h2 className='font-bold text-2xl text-white w-[70%]'>Best Staycation deals</h2>
                                         </span>
                                             <button className='p-4 font-semibold hover:scale-105 transition bg-white rounded-lg w-[70%]'>See activities</button>
                        </div>      
                </div>

                <div className='relative'>
                    <img src={activity2} alt="" />
                        <div className='bg-mainColor h-[21.8rem] opacity-60 absolute  left-1 top-1 w-[25.6rem] rounded-xl'/>  
                             <div className='absolute flex flex-col gap-24 top-0 ml-8 py-10'>
                                 <span className='flex flex-col gap-3'>
                                     <h2 className='text-white'>Don't forget to check out these activities.</h2>
                                         <h2 className='font-bold text-2xl text-white w-[70%]'>All Time
                                          Favourite Activities in Dubai</h2>
                                         </span>
                                             <button className='p-4 font-semibold hover:scale-105 transition bg-white rounded-lg w-[70%]'>See activities</button>
                        </div>      
                </div>

                <div className='relative'>
                    <img src={activity3} alt="" />
                        <div className='bg-mainColor h-[21.8rem] opacity-60 absolute top-0 w-[25.6rem] rounded-xl'/>  
                             <div className='absolute flex flex-col gap-24 top-0 ml-8 py-10'>
                                 <span className='flex flex-col gap-3'>
                                     <h2 className='text-white'>90% Discount</h2>
                                         <h2 className='font-bold text-2xl text-white w-[70%]'>Discover the
                                            wow of Europe</h2>
                                         </span>
                                             <button className='p-4 font-semibold hover:scale-105 transition bg-white rounded-lg w-[70%]'>See activities</button>
                        </div>      
                </div>
            </section>
        </div>
        </>
    )
}
export default Activity