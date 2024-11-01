import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer/Index"
import { Header } from "../components/Header/Index"

export const MainLayout = () => {
    return (
        <>
        <Header />
            <main>
                <button className="fixed bottom-10 right-10" onClick={() => window.scrollTo(0, 0)}>Up</button>
                <Outlet />
            </main>
        <Footer />
        </>
    )
}