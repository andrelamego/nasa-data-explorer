import { Github as GithubIcon, Telescope } from "lucide-react";

export default function Header() {
    const linkClass = (id) =>
        [
            "px-4 py-2 rounded-full text-sm transition",
            "text-stellar-300 hover:text-stellar-100 hover:bg-white/10",
            // activeId === id ? "bg-white/10 text-stellar-100" : "",
        ].join(" ");

    return (
        <header className="fixed top-10 inset-x-0 z-50">
            <div className="mx-auto max-w-7xl px-6">
                <div className="relative flex items-center justify-between">

                    <a
                        href="/"
                        className="flex items-center gap-3 text-stellar-100 hover:text-stellar-200 transition"
                    >
                        <Telescope size={18} className="text-orbit-400" />
                        <span className="font-display text-sm tracking-wide">
                          NASA Data Explorer
                        </span>
                    </a>

                    <nav className="absolute left-1/2 -translate-x-1/2">
                        <div className="flex items-center gap-1 rounded-full bg-space-800/70 px-2 py-2 border border-white/10 backdrop-blur shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
                            <a className={linkClass("apod")} href="#apod">APOD</a>
                            <a className={linkClass("mars")} href="#mars">Mars</a>
                            <a className={linkClass("neo")} href="#neo">Asteroids</a>
                            <a className={linkClass("epic")} href="#epic">Earth</a>
                        </div>
                    </nav>

                    <a
                        href="https://github.com/andrelamego/nasa-apod-gallery"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-stellar-100 hover:text-stellar-200 transition"
                    >
                        <GithubIcon size={18} />
                        <span className="hidden sm:inline">GitHub</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
