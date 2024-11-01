import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar/Index"
import { FooterAuth } from "../components/Footer/FooterAuth"

export const AuthLayout = () => {
    return (
        <>
        <Navbar />
            <main>
                <Outlet />
            </main>
        <FooterAuth />
        </>
    )
}