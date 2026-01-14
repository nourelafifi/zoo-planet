import Hero from '../components/AboutUsPage/Hero'
import Story from '../components/AboutUsPage/Story'
import Team from '../components/AboutUsPage/Team'
import Services from '../components/ServicesSection/services'
import Reviews from '../components/AboutUsPage/Reviews'
import Locations from '../components/Location/Locations'
export default function AboutUsPage() {
    return (
        <>
            <Hero />
            <Story />
            <Team />
            <Reviews />
            <Services />
            <Locations />
        </>
    )
}