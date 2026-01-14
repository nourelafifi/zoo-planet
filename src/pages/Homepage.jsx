import HeroSection from '../components/HeroSection/HeroSection'
import AboutUs from '../components/AboutUs/AboutUs'
import Services from '../components/ServicesSection/services'
import Store from '../components/StoreSection/Store'
import Locations from '../components/Location/Locations'
export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutUs />
            <Services />
            <Store />
            <Locations />
        </>
    )
}