import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import StickyFooter from "../components/StickyFooter";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-space-900 text-stellar-100">
            <Header />

            <main className="relative flex-1">
                <Outlet />
            </main>

            <StickyFooter />
        </div>
    );
}
