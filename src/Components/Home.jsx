import Best from "./Best"
import Hero from "./Hero"
import Activity from "./Activities"
import PopularThings from "./PopularThings"
import Trending from "./Trending"
import Why from "./why"
import Stats from "./stats"
import Section from "./section"
import Testimonials from "./Testimonials"
import MailList from "./mailList"
import Footer from  './Footer'
const Home = () => {
    return (
        <>
        <div className="flex flex-col gap-20">
            <Hero/>
            <Best/>
            <Activity/>
            <PopularThings/>
            <Trending/>
            <Why/>
            <Stats/>
            <Section/>
            <Testimonials/>
            <MailList/>
            <Footer/>
        </div>
        </>
    )
}
export default Home