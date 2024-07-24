import why1 from '../assets/png/why1.png';
import why2 from '../assets/png/why2.png';
import why3 from '../assets/png/why3.png';
import why4 from '../assets/png/why4.png';
const Why = () => {
    return (
        <>
        <div className='lg:flex md:flex justify-around items-center bg-[#ffa6001a]'>
            <div className='flex flex-col gap-10'>
                <h2 className='font-semibold text-2xl w-44'>Why Choose Tourz?</h2>
                    <div className='flex flex-col gap-16'>
                       <div className='flex gap-2 items-center'>
                       <img src={why1} alt="" />
                            <span className='flex flex-col gap-2 mt-4'>
                                <h2 className='font-semibold text-mainColor'>Ultimate Flexibility</h2>
                                <p>You’re in control, with free cancellation andpayment.</p>
                            </span>
                       </div>

                       <div className='flex gap-2 items-center'>
                       <img src={why2} alt="" />
                            <span className='flex flex-col gap-2 mt-4'>
                                <h2 className='font-semibold text-mainColor'>Memorable Experiences</h2>
                                <p>Browse and book tours and activities soincredible.</p>
                            </span>
                       </div>

                       <div className='flex gap-2 items-center'>
                       <img src={why3} alt="" />
                            <span className='flex flex-col gap-2 mt-4'>
                                <h2 className='font-semibold text-mainColor'>Quality at our core</h2>
                                <p>High quality standards. Millions of reviews.</p>
                            </span>
                       </div>
                    </div>
            </div>

            <img className='lg:block lg:h-[100%] hidden md:block md:h-[20rem]' src={why4} alt="" />
        </div>
        </>
    )
}
export default Why