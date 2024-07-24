import user from '../assets/png/User.png'
const Testimonials = () => {
    return (
        <>
        <div>
            <div className='bg-[#ffa6001a] py-10'>
                <h2 className='ml-28 py-10 font-semibold text-2xl text-mainColor'>What are travellers saying</h2>

            <div className='lg:flex grid md:grid-cols-3 grid-cols-1 justify-center gap-20'>
                <div className='lg:w-[25%] flex flex-col gap-3 p-5 rounded-lg bg-white'>
                    <h4 className='text-orange font-semibold'>Great Work!</h4>
                    <p className='leading-8'>“I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”</p>
                    <hr />
                    <span className='flex items-center gap-2'>
                        <img src={user} alt="" />
                         <span>
                            <h3>Courtney Henry</h3>
                            <p className='text-faintText'>Web Designer</p>
                        </span>
                      </span>
                </div>

                <div className='lg:w-[25%] flex flex-col gap-3 p-5 rounded-lg bg-white'>
                    <h4 className='text-orange font-semibold'>Great Work!</h4>
                    <p className='leading-8'>“I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”</p>
                    <hr />
                    <span className='flex items-center gap-2'>
                        <img src={user} alt="" />
                         <span>
                            <h3>Courtney Henry</h3>
                            <p className='text-faintText'>Web Designer</p>
                        </span>
                      </span>
                </div>

                <div className='lg:w-[25%] flex flex-col gap-3 p-5 rounded-lg bg-white'>
                    <h4 className='text-orange font-semibold'>Great Work!</h4>
                    <p className='leading-8'>“I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”</p>
                    <hr />
                    <span className='flex items-center gap-2'>
                        <img src={user} alt="" />
                         <span>
                            <h3>Courtney Henry</h3>
                            <p className='text-faintText'>Web Designer</p>
                        </span>
                      </span>
                </div>
             </div>
            </div>
        </div>
        </>
    )
}
export default Testimonials