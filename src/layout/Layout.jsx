import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
    return (
        <div className="min-h-screen bg-space-900 text-stellar-100">
            <Header />
            <main className="relative">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
