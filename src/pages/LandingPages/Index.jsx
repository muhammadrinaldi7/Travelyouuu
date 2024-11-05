import { Footer } from "../../components/Footer/Index"
import { Header } from "../../components/Header/Index"
import { About } from "../About/Index"
import { Banner } from "../Banner/Index"
import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome"
import {faArrowCircleUp} from "@fortawesome/free-solid-svg-icons"
export const LandingPages = () => {
    return (
       <>
        <button className="fixed z-10 text-primary-100 bottom-10 right-10" onClick={() => window.scrollTo(0, 0)}><FontAwesomeIcon size="2x" icon={faArrowCircleUp}/></button>
        <Banner />
        <About />
       <Footer />
       </>
    )
}