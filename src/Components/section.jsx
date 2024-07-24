import img from '../assets/png/section.png'
import img2 from '../assets/png/section2.png'

const Section = () => {
    return (
        <>
        <div className='relative'>
            <div>
            <img  src={img} alt="" />
            </div>
            <div className='bg-black w-full md:h-[99%] lg:h-[99%] opacity-45 h-44 absolute top-0'/>
                <span className='absolute top-4  md:top-[20%] lg:top-[35%] flex flex-col items-center text-white gap-3 w-full lg:gap-9 md:gap-8'>
                    <h2 className='lg:text-6xl md:text-5xl text-2xl font-semibold'>Keeps Things Flexible</h2>
                    <p className='lg:w-[27%] lg:text-md md:w-[45%] text-sm text-center lg:leading-10 md:leading-[3rem]'>Use Reserve Now & Pay Later to secure the activities you don't want to miss without being locked in.</p>
                    <img className='h-10' src={img2} alt="" />
                </span>
        </div>
        </>
    )
}
export default Section