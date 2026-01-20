import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import ApodPage from "./pages/ApodPage";
// import MarsPage from "./pages/MarsPage";
// import NeoPage from "./pages/NeoPage";
// import EarthPage from "./pages/EarthPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
    return (
        <BrowserRouter basename="/nasa-data-explorer">
            <Routes>
                <Route element={<HomeLayout />}>
                    <Route path="/" element={<HomePage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Route>

                <Route element={<MainLayout />}>
                    <Route path="/apod" element={<ApodPage />} />
                    {/*<Route path="/mars" element={<MarsPage />} />*/}
                    {/*<Route path="/neo" element={<NeoPage />} />*/}
                    {/*<Route path="/earth" element={<EarthPage />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
