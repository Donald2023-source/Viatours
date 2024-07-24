import mailListImg from '../assets/png/mailList.png'

const MailList = () => {
    return (
        <>
        <div className='relative'>
            <img src={mailListImg} alt="" />

            <div className='absolute top-4  md:top-7 md:gap-6 left-3 lg:top-28 lg:left-32 gap-4 flex flex-col lg:gap-7 text-white'>
                <h2 className='lg:text-3xl md:text-3xl font-semibold w-[50%] lg:w-[60%]'>Subscribe To Our Mailing List And Stay Up To Date</h2>
                <p className='text-sm w-[50%] md:block md:text-md lg:text-md lg:block hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quas!</p>

                <fieldset className='bg-[#ffffff1c] rounded-lg w-fit py-1 lg:px-5'>
                    <input className='bg-transparent p-3 text-white outline-none' type="email" placeholder='Your Email' />
                    <button className='lg:p-3 p-2 rounded-lg bg-white hover:scale-105 transition text-black font-semibold'>Subscribe!</button>
                </fieldset >
            </div>
        </div>
        </>
    )
}
export default MailList