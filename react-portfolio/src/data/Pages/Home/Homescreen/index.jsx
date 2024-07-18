import HeroSection from "../HeroSeaction";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonial";
import ContanctMe from "../ContactMe";
import Footer from "../Footer";

export default function Home(){
    return(
        <>
        <HeroSection />
        <MySkills />
        <AboutMe/>
        <MyPortfolio/>
        <Testimonial/>
        <ContanctMe/>
        <Footer/>
        </>
    )
}