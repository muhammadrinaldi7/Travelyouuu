import { Header } from "../../components/Header/Index"
import bannerImg from "../../assets/img/banner.jpg";
export const Login = () => {
    return(
        <>
            <section className="min-h-screen bg-gray-100" 
            style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <Header/>
                <div className="container mx-auto">
                    
                </div>
            </section>
        </>
    )
}