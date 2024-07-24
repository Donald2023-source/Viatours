import stats1 from '../assets/png/stats1.png';
import stats2 from '../assets/png/stats2.png';
import stats3 from '../assets/png/stats3.png';
import stats4 from '../assets/png/stats4.png';
const Stats = () => {
    return (
        <>
        <div>
            <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 place-content-center place-items-center gap-10'>
                <span>
                    <img className='h-14' src={stats1} alt="" />
                    <h2 className='font-bold text-2xl text-mainColor'>932M</h2>
                    <p className='text-sm'>Total Donations</p>
                </span>

                <span>
                    <img className='h-14' src={stats2} alt="" />
                    <h2 className='font-bold text-2xl text-mainColor'>24M</h2>
                    <p className='text-sm'>Campaigns Closed</p>
                </span>

                <span>
                    <img className='h-14' src={stats3} alt="" />
                    <h2 className='font-bold text-2xl text-mainColor'>10M</h2>
                    <p className='text-sm'>Happy People</p>
                </span>

                <span>
                    <img className='h-14' src={stats4} alt="" />
                    <h2 className='font-bold text-2xl text-mainColor'>65M</h2>
                    <p className='text-sm'>Our voluteers</p>
                </span>
            </div>
        </div>
        </>
    )
}
export default Stats